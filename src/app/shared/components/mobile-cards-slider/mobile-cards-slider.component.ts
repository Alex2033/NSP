import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mobile-cards-slider',
  templateUrl: './mobile-cards-slider.component.html',
  styleUrls: ['./mobile-cards-slider.component.scss']
})
export class MobileCardsSliderComponent implements OnInit {
  @Input() cards;
  @Input() type;
  index;
  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 'auto',
    spaceBetween: 8,
    loop: false
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.index = 0;
    });
  }

}
