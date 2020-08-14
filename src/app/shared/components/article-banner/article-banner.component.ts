import {Component, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ArticleBanner} from '../../contracts/article-banner';
import {ApiService} from '../../services/api.service';
import {isPlatformBrowser} from '@angular/common';
import {environment} from '../../../../environments/environment';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-article-banner',
  templateUrl: './article-banner.component.html',
  styleUrls: ['./article-banner.component.scss']
})
export class ArticleBannerComponent implements OnInit {
  @ViewChild('link') link;
  screen: any;
  id: string;
  constructor(private api: ApiService, @Inject(PLATFORM_ID) private platformId: any, private responsive: ResponsiveService) {
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

  clicked = false;
  static notFound = false; // Если при очередном запросе не будет найден баннер, то больше не стоит пытаться его искать
  active = false;
  viewed = false;
  data: ArticleBanner;
  @ViewChild('banner') banner;
  @Input() articleId: number;

  ngOnInit(): void {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Проверка, что до нижней границы списка стетей осталось менее Х пикселей
    if (isPlatformBrowser(this.platformId) && !ArticleBannerComponent.notFound) {
      if (!this.active && this.needLoading()) {
        this.active = true;
        this.api.getArticleBanner(this.articleId).subscribe(response => {
          this.data = response.data;
          this.checkView();
        }, (err) => {
          if (err.status === 404) {
            ArticleBannerComponent.notFound = true;
          }
        });
      }
      if (!this.viewed && this.data) {
        this.checkView();
      }
    }
  }

  checkView() {
    const distance = this.banner.nativeElement.getBoundingClientRect();
    if (distance.top < window.innerHeight && distance.bottom > 0) {
      this.viewed = true;
      this.api.addArticleBannerView(this.data.id).subscribe();
    }
  }

  incClick() {
    if (!this.clicked) {
      this.clicked = true;
      this.api.addArticleBannerClick(this.data.id).subscribe();
    }
  }

  needLoading() {
    const distance = this.banner.nativeElement.getBoundingClientRect();
    return (
      distance.bottom - 500 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  getScale() {
    if (this.screen !== 'sm') {
      return null;
    } else {
      return 'scale(' + ((window.outerWidth / 743) - (24 / 768)) + ')';
    }
  }

  getBannerHeight() {
    if (this.screen === 'sm') {
      return 142 * ((window.outerWidth / 743) - (24 / 768));
    }
  }
}
