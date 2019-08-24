import { Component, OnInit } from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';

@Component({
  selector: 'app-material-list-card',
  templateUrl: './material-list-card.component.html',
  styleUrls: ['./material-list-card.component.scss']
})
export class MaterialListCardComponent extends ResizableCardComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
