import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from '../../services/responsive.service';
import {NewsFeed} from '../../contracts/news-feed';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss']
})
export class NewsSliderComponent implements OnInit {
  @Input() feed: NewsFeed;
  @Input() size;

  newsSliderConfig: SwiperConfigInterface;

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      if (screen === 'xl') {
        this.newsSliderConfig = {
          slidesPerView: 4,
          loop: false,
          spaceBetween: 40
        };
      } else if (screen === 'lg') {
        this.newsSliderConfig = {
          slidesPerView: 4,
          loop: false,
          spaceBetween: 20
        };
      } else if (screen === 'md') {
        this.newsSliderConfig = {
          slidesPerView: 3,
          loop: false,
          spaceBetween: 25
        };
      } else if (screen === 'sm') {
        this.newsSliderConfig = {
          slidesPerView: 1,
          loop: false,
          spaceBetween: 0
        };
      }
    });
  }

}
