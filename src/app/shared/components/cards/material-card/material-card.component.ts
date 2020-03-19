import {Component, OnInit, Input} from '@angular/core';
import {ResizableCardComponent} from '../resizable-card.component';
import {ArticleCard} from '../../../contracts/article-card';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent extends ResizableCardComponent implements OnInit {
  @Input() view: 'half' | 'full';
  @Input() data: ArticleCard = { // TODO DELETE
    type: 'article',
    size: 'small',
    publishedAt: 1584608518,
    markerName: '💥 Свежее',
    title: 'Долги под апартами',
    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
    view: 'full',
    articleViewsCount: 12453,
    directorySlug: 'commerce',
    directoryName: 'Коммерческая недвижимость',
    articleId: 123,
    articleSlug: 'article-slug',
    imageXl: '',
    imageLg: '',
    imageMd: '',
    imageSm: '',
  };

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.view === 'full') {
      this.data.imageXl = 'https://picsum.photos/618/618';
      this.data.imageLg = 'https://picsum.photos/618/618';
      this.data.imageMd = 'https://picsum.photos/618/618';
      this.data.imageSm = 'https://picsum.photos/618/618';
    } else {
      switch (this.size) {
        case 'small':
          this.data.imageXl = 'https://picsum.photos/304/152';
          this.data.imageLg = 'https://picsum.photos/304/152';
          this.data.imageMd = 'https://picsum.photos/304/152';
          this.data.imageSm = 'https://picsum.photos/304/152';
          break;
        case 'large':
          this.data.imageXl = 'https://picsum.photos/618/304';
          this.data.imageLg = 'https://picsum.photos/618/304';
          this.data.imageMd = 'https://picsum.photos/618/304';
          this.data.imageSm = 'https://picsum.photos/618/304';
          break;
        default:
          this.data.imageXl = 'https://picsum.photos/304/304';
          this.data.imageLg = 'https://picsum.photos/304/304';
          this.data.imageMd = 'https://picsum.photos/304/304';
          this.data.imageSm = 'https://picsum.photos/304/304';
      }
    }
  }

}
