import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-company-carousel-block',
  templateUrl: './company-carousel-block.component.html',
  styleUrls: ['./company-carousel-block.component.scss']
})
export class CompanyCarouselBlockComponent implements OnInit {

  @Input() data;

  screen: string;

  config: SwiperConfigInterface;

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'sm') {
        this.config = {
          slidesPerView: 'auto',
          loop: false,
          spaceBetween: 16
        };
      } else {
        this.config = {
          slidesPerView: 4,
          loop: false,
          spaceBetween: 8
        };
      }
    });
  }

}
