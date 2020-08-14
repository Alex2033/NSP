import {AfterViewInit, Component, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';
import {AdvertisingCard} from '../../../contracts/advertising-card';
import {ApiService} from '../../../services/api.service';
import {isPlatformBrowser} from '@angular/common';
import {environment} from '../../../../../environments/environment';
import {ResponsiveService} from '../../../services/responsive.service';

@Component({
  selector: 'app-advertising-card',
  templateUrl: './advertising-card.component.html',
  styleUrls: ['./advertising-card.component.scss']
})
export class AdvertisingCardComponent extends ResizableCardComponent implements OnInit, AfterViewInit {
  @ViewChild('link') link;
  screen: any;
  id: string;
  constructor(private api: ApiService, @Inject(PLATFORM_ID) private platformId: any, private responsive: ResponsiveService) {
    super();
    if(isPlatformBrowser(this.platformId)) {
      const eventMethod = window.addEventListener
        ? 'addEventListener'
        : 'attachEvent';
      const eventer = window[eventMethod];
      const messageEvent = eventMethod === 'attachEvent'
        ? 'onmessage'
        : 'message';

      eventer(messageEvent, (e) => {

        if (e.origin !== environment.apiHost) {
          return;
        }
        if (e.data.type === 'banner_click' && e.data.id === this.id) {
          this.link.nativeElement.click();
        }

        // console.log(e);
      });
      this.id = Math.random().toString(36).substr(2, 9);
    }
  }

  clicked = false;
  viewed = false;
  @Input() data: AdvertisingCard;
  @ViewChild('banner') banner;
  @ViewChild('htmlXlWrapper') htmlXlWrapper;
  @ViewChild('htmlLgWrapper') htmlLgWrapper;
  @ViewChild('htmlMdWrapper') htmlMdWrapper;
  @ViewChild('htmlSmWrapper') htmlSmWrapper;

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  ngAfterViewInit() {
    this.onScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Проверка, что до нижней границы списка стетей осталось менее Х пикселей
    if (isPlatformBrowser(this.platformId)) {
      if (!this.viewed && this.data) {
        this.checkView();
      }
    }
  }

  checkView() {
    const distance = this.banner.nativeElement.getBoundingClientRect();
    if (distance.top < window.innerHeight && distance.bottom > 0) {
      this.viewed = true;
      this.api.addAdvertisingCardView(this.data.id).subscribe();
    }
  }

  incClick() {
    if (!this.clicked) {
      this.clicked = true;
      this.api.addAdvertisingCardClick(this.data.id).subscribe();
    }
  }

  getScale() {
    if (this.screen !== 'sm' || !window) {
      return null;
    } else {
      return 'scale(' + ((window.outerWidth / 743) - (24 / 768)) + ')';
    }
  }
  getBannerHeight() {
    if (this.screen === 'sm' && window) {
      return window.outerWidth - 24; // 24 это padding по краям
    }
  }
}
