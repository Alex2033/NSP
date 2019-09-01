import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  @Input() header: string;
  carouselConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    navigation: true,
    loop: true,
    spaceBetween: 8
  };
  constructor() { }

  ngOnInit() {
  }

}
