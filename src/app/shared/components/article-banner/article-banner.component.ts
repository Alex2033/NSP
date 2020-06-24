import {Component, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ArticleBanner} from '../../contracts/article-banner';
import {ApiService} from '../../services/api.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-article-banner',
  templateUrl: './article-banner.component.html',
  styleUrls: ['./article-banner.component.scss']
})
export class ArticleBannerComponent implements OnInit {

  constructor(private api: ApiService, @Inject(PLATFORM_ID) private platformId: any) {
  }

  clicked = false;
  static notFound = false; // Если при очередном запросе не будет найден баннер, то больше не стоит пытаться его искать
  active = false;
  viewed = false;
  data: ArticleBanner;
  @ViewChild('banner') banner;
  @ViewChild('htmlXlWrapper') htmlXlWrapper;
  @ViewChild('htmlLgWrapper') htmlLgWrapper;
  @ViewChild('htmlMdWrapper') htmlMdWrapper;
  @ViewChild('htmlSmWrapper') htmlSmWrapper;
  @Input() articleId: number;

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Проверка, что до нижней границы списка стетей осталось менее Х пикселей
    if (isPlatformBrowser(this.platformId) && !ArticleBannerComponent.notFound) {
      if (!this.active && this.needLoading()) {
        this.active = true;
        this.api.getArticleBanner(this.articleId).subscribe(response => {
          this.data = response.data;
          if (this.data.type === 'html') {
            setTimeout(() => { // Чтобы обновился шаблон
              this.htmlXlWrapper.nativeElement.innerHTML = this.data.html.xl;
              this.htmlLgWrapper.nativeElement.innerHTML = this.data.html.lg;
              this.htmlMdWrapper.nativeElement.innerHTML = this.data.html.md;
              this.htmlSmWrapper.nativeElement.innerHTML = this.data.html.sm;
            }, 1);
          }
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
}
