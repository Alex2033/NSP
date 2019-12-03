import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss']
})
export class NewsSliderComponent implements OnInit {

  @Input() size;

  newsSliderConfig: SwiperConfigInterface = {
    slidesPerView: 1,
  };

  constructor() { }

  ngOnInit() {
  }

}
