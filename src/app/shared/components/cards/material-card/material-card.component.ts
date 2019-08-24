import { Component, OnInit } from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent extends ResizableCardComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
