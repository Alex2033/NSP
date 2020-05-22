import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  Input,
  Inject, PLATFORM_ID
} from '@angular/core';
import {translateAnimation} from '../../animations/translate-animation';
import {ApiService} from '../../services/api.service';
import {TopLineBanner} from '../../contracts/topline-banner';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {AppComponent} from '../../../app.component';
import {CurrentPageService} from '../../services/current-page.service';

@Component({
  selector: 'app-topline-advertising',
  templateUrl: './topline-advertising.component.html',
  styleUrls: ['./topline-advertising.component.scss'],
  animations: [
    translateAnimation(1000)
  ]
})
export class ToplineAdvertisingComponent implements OnInit {
  @ViewChild('htmlXlWrapper') htmlXlWrapper;
  @ViewChild('htmlLgWrapper') htmlLgWrapper;
  @ViewChild('htmlMdWrapper') htmlMdWrapper;
  @ViewChild('htmlSmWrapper') htmlSmWrapper;
  @ViewChild('banner') banner;
  data: TopLineBanner;
  clicked = false;
  viewed = false;
  name: any;
  showActions: boolean = false;
  show: boolean;
  closingReasons = [];
  inited = false;
  @Output() visible: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() bannerHeight: EventEmitter<number> = new EventEmitter<number>();
  @Input() height: number;

  constructor(private api: ApiService, @Inject(PLATFORM_ID) private platformId: any, private currentPage: CurrentPageService) {
  }

  ngOnInit() {
    this.currentPage.value().subscribe(page => {
      this.api.getTopLineBanner(page ? page.type : null, page ? page.id : null).subscribe((response) => {
        this.visible.next(false);
        this.show = true;
        this.data = response.data;
        this.api.getAdvertisementClosingReasons().subscribe(data => {
          this.closingReasons = data.reasons;
        });
        if (this.data.type === 'html') {
          setTimeout(() => { // Чтобы обновился шаблон
            this.htmlXlWrapper.nativeElement.innerHTML = this.data.html.xl;
            this.htmlLgWrapper.nativeElement.innerHTML = this.data.html.lg;
            this.htmlMdWrapper.nativeElement.innerHTML = this.data.html.md;
            this.htmlSmWrapper.nativeElement.innerHTML = this.data.html.sm;
          });
        }
        const interval = setInterval(() => { // Не знаю когда загрузился код, поэтому интервал
          const height = this.banner.nativeElement.getBoundingClientRect().height;
          if (height > 0) {
            this.inited = true;
            this.bannerHeight.emit(height);
            this.visible.next(true);
            clearInterval(interval);
          }
        }, 300);
      });
    });

    // this.topHeaderHeight = 74;
  }


  close(reasonId?) {
    this.show = false;
    this.visible.next(false);
    this.bannerHeight.next(0);
    if (reasonId) {
      this.api.sendTopLineBannerClosingReason(this.data.id, reasonId).subscribe();
    }
  }

  incClick() {
    if (!this.clicked) {
      this.clicked = true;
      this.api.addTopLineBannerClick(this.data.id).subscribe();
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkView() {
    if (!this.viewed && this.inited) {
      if (this.banner.nativeElement.getBoundingClientRect().top === 0) {
        this.viewed = true;
        this.api.addTopLineBannerView(this.data.id).subscribe();
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  syncHeight() {
    setTimeout(() => {
      this.bannerHeight.emit(this.banner.nativeElement.getBoundingClientRect().height);
    });
  }

  // checkScroll() {
  //   const windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (windowScroll >= this.topHeaderHeight) {
  //     // this.show = true;
  //   }
  // }

}
