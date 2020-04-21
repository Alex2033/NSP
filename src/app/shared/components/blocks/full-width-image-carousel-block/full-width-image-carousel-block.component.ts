import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-full-width-image-carousel-block',
  templateUrl: './full-width-image-carousel-block.component.html',
  styleUrls: ['./full-width-image-carousel-block.component.scss']
})
export class FullWidthImageCarouselBlockComponent implements OnInit {

  screen: string;
  index: number = 0;

  @Input() images;

  carouselConfig: SwiperConfigInterface = {
    slidesPerView: 1,
    loop: false,
    autoHeight: true
  };

  constructor(private responsive: ResponsiveService, public modal: ModalService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'sm') {
        this.carouselConfig.slidesPerView = 'auto';
        this.carouselConfig.spaceBetween = 12;
      } else {
        this.carouselConfig.slidesPerView = 1;
        this.carouselConfig.spaceBetween = 0;
      }
    });
  }
  openModal(index) {
    this.modal.open('gallery', {images: this.images, index});
  }
}
