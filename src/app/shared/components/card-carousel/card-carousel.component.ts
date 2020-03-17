import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  @Input() header: string;
  @Input() smallHeader: boolean;
  carouselConfig: SwiperConfigInterface;
  screen: string;

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'xl') {
        this.carouselConfig = {
          slidesPerView: 4,
        }
      } else if (screen === 'lg') {
        this.carouselConfig = {
          slidesPerView: 3,
        }
      } else if (screen === 'md') {
        this.carouselConfig = {
          slidesPerView: 2,
        }
      } else if (screen === 'sm') {
        this.carouselConfig = {
          slidesPerView: 'auto',
        }
      }
    });
  }

}
