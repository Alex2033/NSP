import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  @Input() header: string;
  @Input() smallHeader: boolean;
  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 8
  };
  constructor() { }

  ngOnInit() {
  }

}
