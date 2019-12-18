import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from '../../services/responsive.service';

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
  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 4,
    spaceBetween: 8,
    loop: false
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
