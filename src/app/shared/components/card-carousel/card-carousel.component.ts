import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from '../../services/responsive.service';
import {CardCollection} from '../../contracts/card-collection';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  screen: string;
  @Input() articleRouteState = {};
  @Input() data: CardCollection;
  @Input() smallHeader: boolean;
  cardsView = 0;
  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 4,
    loop: false
  };

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'xl') {
        this.carouselConfig = {
          slidesPerView: 4,
          loop: false
        };
      } else if (screen === 'lg') {
        this.carouselConfig = {
          slidesPerView: 3,
          loop: false
        };
      } else if (screen === 'md') {
        this.carouselConfig = {
          slidesPerView: 2,
          loop: false
        };
      } else {
        this.carouselConfig.slidesPerView = 'auto';
      }
    });
  }
}
