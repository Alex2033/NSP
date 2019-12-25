import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from '../../services/responsive.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tabs-card-carousel',
  templateUrl: './tabs-card-carousel.component.html',
  styleUrls: ['./tabs-card-carousel.component.scss']
})
export class TabsCardCarouselComponent implements OnInit {

  @Input() header: string;
  @Input() smallHeader: boolean;
  @Input() tabs;
  cardsView: number = 0;
  carouselConfig: SwiperConfigInterface;

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      if (screen === 'xl') {
        this.carouselConfig = {
          slidesPerView: 4,
          loop: false
        }
      } else if (screen === 'lg') {
        this.carouselConfig = {
          slidesPerView: 3,
          loop: false
        }
      } else if (screen === 'md') {
        this.carouselConfig = {
          slidesPerView: 2,
          loop: false
        }
      }
    });
  }

  showSlides(index, cardCarousel) {
    this.cardsView = index;
    
    setTimeout(() => {
      cardCarousel.swiper.update();
    });
    
  }

}
