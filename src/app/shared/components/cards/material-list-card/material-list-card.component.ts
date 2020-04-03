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
  blocks = [];
  title: string;

  @Input() set data(value) {
    this.blocks = [];
    this.title = value.title;
    switch (value.size) {
      case 'small':
        value.articles.map((article, index) => {
          this.blocks[index] = [article];
        });
        break;
      case 'medium-horizontal':
      case 'medium-vertical':
        value.articles.map((article, index) => {
          if (!this.blocks[Math.floor(index / 2)]) {
            this.blocks[Math.floor(index / 2)] = [];
          }
          this.blocks[Math.floor(index / 2)].push(article);
        });
        break;
      case 'large':
        value.articles.map((article, index) => {
          if (!this.blocks[Math.floor(index / 4)]) {
            this.blocks[Math.floor(index / 4)] = [];
          }
          this.blocks[Math.floor(index / 4)].push(article);
        });
        break;
    }
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
