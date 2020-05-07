import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../../../shared/contracts/company';
import {Meta, Title} from '@angular/platform-browser';
import {ArticleCard} from '../../../../shared/contracts/article-card';
import {isPlatformBrowser} from '@angular/common';
import {CurrentPageService} from '../../../../shared/services/current-page.service';
import {ILoadEvent} from 'angular8-yandex-maps/lib/types/types';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  objects = [];
  persons = [];
  screen: string;
  articles: ArticleCard[] = [];
  isBrowser = false;
  public placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: 'assets/images/icons/map_pin-red.svg',
    iconImageSize: [32, 40]
  };

  company: Company;

  constructor(
    private responsive: ResponsiveService,
    private route: ActivatedRoute,
    protected title: Title,
    protected meta: Meta,
    private currentPage: CurrentPageService,
    @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
    this.route.data.subscribe(data => {
      this.currentPage.next();
      this.company = data.company.data;
      this.persons = data.company.people;
      this.persons.map(person => {
        person.type = 'person';
      });
      this.articles = data.articles.items;
      this.title.setTitle((this.company.metaTitle ? this.company.metaTitle : this.company.name + ' - Информация о компании ' + ' - NSP.ru'));
      this.meta.updateTag({
          name: 'description',
          content: this.company.metaDescription ? this.company.metaDescription : this.company.description ? this.company.description : ''
        }
      );
      if (this.company.metaKeywords) {
        this.meta.updateTag({
            name: 'keywords',
            content: this.company.metaKeywords ? this.company.metaKeywords : ''
          }
        );
      }
    });
  }
}
