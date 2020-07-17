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
  @Input() displayDate = true;
  @Input() routeState = {};
  @Input() openInNewWindow = false;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
