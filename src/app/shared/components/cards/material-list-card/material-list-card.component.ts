import {Component, OnInit, Input, ViewChild, Inject, PLATFORM_ID} from '@angular/core';
import {ResizableCardComponent} from '../resizable-card.component';
import {SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {ArticleListCard} from '../../../contracts/article-list-card';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {fadeInOutAnimation} from '../../../animations/fade-in-out.animation';

@Component({
  selector: 'app-material-list-card',
  templateUrl: './material-list-card.component.html',
  styleUrls: ['./material-list-card.component.scss'],
  animations: [
    fadeInOutAnimation()
  ]
})
export class MaterialListCardComponent extends ResizableCardComponent implements OnInit {
  @Input() highlight = false;
  @Input() withGradient: boolean;
  blocks = [];
  title: string;
  url: string;
  start;
  blockSizes = {
    large: 4,
    'medium-vertical': 2,
    'medium-horizontal': 2,
    small: 1
  };
  articleLength = 0;
  inited = false;
  @Input() set data(value) {
    this.articleLength = value.articles.length;
    this.blocks = [];
    this.title = value.title;
    this.url = value.url;
    value.articles.map((article, index) => {
      if (!this.blocks[Math.floor(index / this.blockSizes[this.size])]) {
        this.blocks[Math.floor(index / this.blockSizes[this.size])] = [];
      }
      this.blocks[Math.floor(index / this.blockSizes[this.size])].push(article);
    });
  }

  materialListConfig: SwiperConfigInterface = {
    slidesPerView: 1,
  };

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    super();
  }

  ngOnInit() {
    this.start = new Date().getTime();
    this.inited = isPlatformServer(this.platformId);
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.inited = true;
      }, 1);
    }
  }

}
