import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-full-width-image-carousel-block',
  templateUrl: './full-width-image-carousel-block.component.html',
  styleUrls: ['./full-width-image-carousel-block.component.scss']
})
export class FullWidthImageCarouselBlockComponent implements OnInit {

  index: number = 0;

  @Input() images;

  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
