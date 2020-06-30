import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {ResizableCardComponent} from '../resizable-card.component';
import {SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {ArticleListCard} from '../../../contracts/article-list-card';

@Component({
  selector: 'app-material-list-card',
  templateUrl: './material-list-card.component.html',
  styleUrls: ['./material-list-card.component.scss']
})
export class MaterialListCardComponent extends ResizableCardComponent implements OnInit {
  @Input() highlight = false;
  @Input() withGradient: boolean;
  blocks = [];
  title: string;

  blockSizes = {
    large: 4,
    'medium-vertical': 2,
    'medium-horizontal': 2,
    small: 1
  };
  articleLength = 0;
  @Input() set data(value) {
    this.articleLength = value.articles.length;
    this.blocks = [];
    this.title = value.title;
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

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
