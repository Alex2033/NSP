import { Component, OnInit } from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';

@Component({
  selector: 'app-advertising-card',
  templateUrl: './advertising-card.component.html',
  styleUrls: ['./advertising-card.component.scss']
})
export class AdvertisingCardComponent extends ResizableCardComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
