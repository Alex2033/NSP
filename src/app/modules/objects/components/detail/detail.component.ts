import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApartmentComplex} from '../../../../shared/contracts/apartment-complex';
import {ArticleCard} from '../../../../shared/contracts/article-card';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {isPlatformBrowser} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';
import {CurrentPageService} from '../../../../shared/services/current-page.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  isBrowser = false;
  articles: ArticleCard[] = [];
  screen: string;

  apartmentComplex: ApartmentComplex;

  constructor(private route: ActivatedRoute,
              private responsive: ResponsiveService,
              @Inject(PLATFORM_ID) private platformId: any,
              protected title: Title,
              protected meta: Meta,
              private currentPage: CurrentPageService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentPage.next();
      this.apartmentComplex = this.route.snapshot.data.apartmentComplex.data;
      this.title.setTitle((this.apartmentComplex.metaTitle ? this.apartmentComplex.metaTitle : this.apartmentComplex.name + ' - Информация о объекте ' + ' - NSP.ru'));
      this.meta.updateTag({
          name: 'description',
          content: this.apartmentComplex.metaDescription ? this.apartmentComplex.metaDescription : this.apartmentComplex.previewText ? this.apartmentComplex.previewText : ''
        }
      );
      if (this.apartmentComplex.metaKeywords) {
        this.meta.updateTag({
            name: 'keywords',
            content: this.apartmentComplex.metaKeywords ? this.apartmentComplex.metaKeywords : ''
          }
        );
      }
      this.articles = this.route.snapshot.data.articles.items;
    });
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
