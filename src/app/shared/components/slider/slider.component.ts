import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliderConfig: SwiperConfigInterface = {
    slidesPerView: 1,
  };

  constructor() { }

  ngOnInit() {
  }

}
