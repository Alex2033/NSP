import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Company} from '../../../../shared/contracts/company';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../../../../shared/contracts/person';
import {ArticleCard} from '../../../../shared/contracts/article-card';
import {CurrentPageService} from '../../../../shared/services/current-page.service';
import {isPlatformBrowser} from '@angular/common';
import {ApiService} from '../../../../shared/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  screen: string;

  articles: ArticleCard[] = [];

  person: Person;
  company: Company;

  blockLoading = false;
  hasMoreBlocks: boolean;

  constructor(
    private responsive: ResponsiveService,
    private route: ActivatedRoute,
    protected title: Title,
    protected meta: Meta,
    private api: ApiService,
    private currentPage: CurrentPageService,
    @Inject(PLATFORM_ID) private platformId: any,) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.route.data.subscribe(data => {
      this.currentPage.next();
      this.hasMoreBlocks = true;
      this.person = data.person.data;
      this.company = data.person.company;
      this.articles = data.articles.items;
      this.title.setTitle(this.person.name + ' - Информация о персоне ' + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.person.description ? this.person.description : ''
        }
      );
    });
  }

  loadBlock() {
    this.blockLoading = true;
    this.api.getPersonArticles(
      {
        person_id: this.person.id,
        limit: 24,
        offset: this.articles.length
      }
    ).subscribe((response) => {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => { // Чтобы не грузил по несколько блоков, т.к. событий скролла очень много
          this.blockLoading = false;
        }, 300);
      }
      this.articles = [...this.articles, ...response.items];
      if (response.items.length === 0) {
        this.hasMoreBlocks = false;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Проверка, что до нижней границы списка плиток осталось менее Х пикселей
    if (!this.blockLoading && this.isInViewport(document.querySelector('.materials'))) {
      if (this.hasMoreBlocks) {
        this.loadBlock();
      }
    }
  }

  isInViewport(elem) {
    const distance = elem.getBoundingClientRect();
    return (
      distance.bottom - 500 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

}
