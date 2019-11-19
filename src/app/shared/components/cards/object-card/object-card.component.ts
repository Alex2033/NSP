import { Component, OnInit } from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';

@Component({
  selector: 'app-object-card',
  templateUrl: './object-card.component.html',
  styleUrls: ['./object-card.component.scss']
})
export class ObjectCardComponent extends ResizableCardComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
