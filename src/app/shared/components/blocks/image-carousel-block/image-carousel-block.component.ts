import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-image-carousel-block',
  templateUrl: './image-carousel-block.component.html',
  styleUrls: ['./image-carousel-block.component.scss']
})
export class ImageCarouselBlockComponent implements OnInit {

  @Input() images;
  index = 0;
  screen: string;

  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 'auto',
    spaceBetween: 8,
    loop: false
  };

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
