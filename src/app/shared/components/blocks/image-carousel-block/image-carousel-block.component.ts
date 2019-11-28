import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-image-carousel-block',
  templateUrl: './image-carousel-block.component.html',
  styleUrls: ['./image-carousel-block.component.scss']
})
export class ImageCarouselBlockComponent implements OnInit {

  @Input() slides;
  @Input() title;

  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 'auto',
    spaceBetween: 8
  };

  constructor() { }

  ngOnInit() {
  }

}
