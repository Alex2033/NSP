import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      console.log(this.cardsView);
    }, 1000)
  }

}
