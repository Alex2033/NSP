import {Component, OnInit, Inject, PLATFORM_ID, ViewChild, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApartmentComplex} from '../../../../shared/contracts/apartment-complex';
import {ArticleCard} from '../../../../shared/contracts/article-card';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {isPlatformBrowser} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';
import {CurrentPageService} from '../../../../shared/services/current-page.service';
import {NgScrollbar} from 'ngx-scrollbar';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({
          opacity: 0
        }),
        animate('200ms', style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate('200ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class DetailComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar;
  scrollPosition: number = 0;
  showLeftControl: boolean = false;
  showRightControl: boolean = true;
  isBrowser = false;
  articles: ArticleCard[] = [];
  screen: string;
  cache;
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
      this.cache = {};
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
      if (this.apartmentComplex.layoutsPublishedAt) {
        let added = false;
        this.apartmentComplex.content.forEach((block, index) => {
          if (!added && block.type === 'apartment_layout') {
            added = true;
            this.apartmentComplex.content.splice(index, 0, {
              type: 'text',
              data: {
                content: 'Информация актуальна на дату публикации (' + this.apartmentComplex.layoutsPublishedAt + ')',
                highlight: false
              }
            });
            return;
          }
        });
      }
    });
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  ngAfterViewInit() {
    if (this.screen === 'sm') {
      this.scrollbarRef.scrolled.subscribe(e => {
        this.scrollPosition = e.target.scrollLeft;
        if (!this.showRightControl) {
          this.showRightControl = true;
        }
        if (this.scrollPosition > 0) {
          this.showLeftControl = true;
        } else {
          this.showLeftControl = false;
        }
      });
    }
  }

  hideRightControl() {
    setTimeout(() => {
      this.showRightControl = false;
    }, 0);
  }

  scrollToDescriptionBlock(repeat = true) {
    const el: any = document.getElementsByTagName('app-block-layout');
    this.scrollToElem(el[0]);
  }

  scrollToLocationBlock() {
    const el: any = this.locationBlock();
    this.scrollToElem(el);
  }

  locationBlock() {
    return this.findHeaderWithValue('Местоположение');
  }

  scrollToLayoutsBlock() {
    const el: any = this.layoutsBlock();
    this.scrollToElem(el);
  }

  layoutsBlock() {
    return this.findHeaderWithValue('Планировки');
  }

  scrollToGalleryBlock() {
    const el: any = this.galleryBlock();
    this.scrollToElem(el[0]);
  }

  galleryBlock() {
    return document.getElementsByTagName('app-full-width-image-carousel-block');
  }

  scrollToCompanyBlock() {
    const el: any = this.companyBlock();
    this.scrollToElem(el);
  }

  companyBlock() {
    let el = document.getElementsByTagName('app-extended-company-card');
    if (el.length === 0) {
      el = document.getElementsByTagName('app-company-card');
    }
    if (el.length > 0) {
      return el[0];
    }
  }

  scrollToMaterialsBlock() {
    const el: any = this.materialsBlock();
    this.scrollToElem(el);
  }

  materialsBlock() {
    return document.querySelector('.materials');
  }

  private scrollToElem(el, repeat = true) {
    const header: any = document.querySelector('app-header header');
    if (el) {
      window.scroll({top: el.offsetTop - header.offsetHeight - 32, left: 0, behavior: 'smooth'});
      if (repeat) {
        setTimeout(() => {
          this.scrollToElem(el, false);
        }, 400);
      }
    }
  }

  private findHeaderWithValue(text) {
    let tag;
    if (this.cache[text]) {
      tag = this.cache[text];
    } else {
      tag = this.findTagWithValue('h2', text);
      if (!tag) {
        tag = this.findTagWithValue('h3', text);
        if (!tag) {
          tag = this.findTagWithValue('strong', text);
        }
      }
      this.cache[text] = tag;
    }
    return tag;
  }

  private findTagWithValue(tag, text) {
    const aTags = document.getElementsByTagName(tag);
    const searchText = text.trim().toLowerCase();
    for (let i = 0; i < aTags.length; i++) {
      if (aTags[i].textContent.trim().toLowerCase() === searchText) {
        return aTags[i];
      }
    }
  }
}
