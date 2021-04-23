import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {ResizableCardComponent} from '../resizable-card.component';
import {ArticleCard} from '../../../contracts/article-card';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent extends ResizableCardComponent implements OnInit, AfterViewInit {
  @Input() view: 'half' | 'full';
  @Input() data: ArticleCard;
  @Input() displayDate = true;
  @Input() routeState = {};
  @Input() openInNewWindow = false;
  start;
  constructor() {
    super();
  }

  ngOnInit() {
    this.start = new Date().getTime();
  }

  ngAfterViewInit() {
  }

}
