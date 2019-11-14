import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';
import { SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-material-list-card',
  templateUrl: './material-list-card.component.html',
  styleUrls: ['./material-list-card.component.scss']
})
export class MaterialListCardComponent extends ResizableCardComponent implements OnInit {
  @Input() view: 'default' | 'readBlock';
  materialListConfig: SwiperConfigInterface = {
    slidesPerView: 1,
  };
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
