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
  carouselConfig: SwiperConfigInterface = {
    spaceBetween: 8
  };
  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      if (screen === 'xl') {
        this.carouselConfig = {
          slidesPerView: 4,
        }
      } else if (screen === 'lg') {
        this.carouselConfig = {
          slidesPerView: 3,
        }
      }
    });
  }

}
