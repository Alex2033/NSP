import {Component, OnInit, Input} from '@angular/core';
import {ResizableCardComponent} from '../resizable-card.component';
import {ArticleCard} from '../../../contracts/article-card';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent extends ResizableCardComponent implements OnInit {
  @Input() view: 'half' | 'full';
  @Input() data: ArticleCard;

  constructor() {
    super();
  }

  ngOnInit() {
  //   if (environment.production === false) {
  //     if (this.view === 'full') {
  //       this.data.imageXl = 'https://picsum.photos/618/618';
  //       this.data.imageLg = 'https://picsum.photos/618/618';
  //       this.data.imageMd = 'https://picsum.photos/618/618';
  //       this.data.imageSm = 'https://picsum.photos/618/618';
  //     } else {
  //       switch (this.size) {
  //         case 'small':
  //           this.data.imageXl = 'https://picsum.photos/304/152';
  //           this.data.imageLg = 'https://picsum.photos/304/152';
  //           this.data.imageMd = 'https://picsum.photos/304/152';
  //           this.data.imageSm = 'https://picsum.photos/304/152';
  //           break;
  //         case 'large':
  //           this.data.imageXl = 'https://picsum.photos/618/304';
  //           this.data.imageLg = 'https://picsum.photos/618/304';
  //           this.data.imageMd = 'https://picsum.photos/618/304';
  //           this.data.imageSm = 'https://picsum.photos/618/304';
  //           break;
  //         default:
  //           this.data.imageXl = 'https://picsum.photos/304/304';
  //           this.data.imageLg = 'https://picsum.photos/304/304';
  //           this.data.imageMd = 'https://picsum.photos/304/304';
  //           this.data.imageSm = 'https://picsum.photos/304/304';
  //       }
  //     }
  //   }
  }

}
