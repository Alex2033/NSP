import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-company-carousel-block',
  templateUrl: './company-carousel-block.component.html',
  styleUrls: ['./company-carousel-block.component.scss']
})
export class CompanyCarouselBlockComponent implements OnInit {

  @Input() carousel;

  config: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 8
  };

  constructor() { }

  ngOnInit() {
  }

}
