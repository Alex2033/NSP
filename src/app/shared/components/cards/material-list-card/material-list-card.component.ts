import { Component, OnInit, Input } from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-material-list-card',
  templateUrl: './material-list-card.component.html',
  styleUrls: ['./material-list-card.component.scss']
})
export class MaterialListCardComponent extends ResizableCardComponent implements OnInit {
  @Input() cardType: 'default' | 'readBlock';
  materialListConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    navigation: true,
    loop: true,
  };
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
