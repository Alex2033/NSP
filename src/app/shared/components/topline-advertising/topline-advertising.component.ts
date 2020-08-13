import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  Output,
  EventEmitter,
  Input,
  Inject, PLATFORM_ID
} from '@angular/core';
import {translateAnimation} from '../../animations/translate-animation';
import {ApiService} from '../../services/api.service';
import {TopLineBanner} from '../../contracts/topline-banner';
import {CurrentPageService} from '../../services/current-page.service';
import {ResponsiveService} from '../../services/responsive.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-topline-advertising',
  templateUrl: './topline-advertising.component.html',
  styleUrls: ['./topline-advertising.component.scss'],
  animations: [
    translateAnimation(1000)
  ]
})
export class ToplineAdvertisingComponent implements OnInit {
  @ViewChild('banner') banner;
  @ViewChild('link') link;
  data: TopLineBanner;
  clicked = false;
  viewed = false;
  name: any;
  showActions: boolean = false;
  show: boolean;
  closingReasons = [];
  inited = false;
  screen;
  @Output() visible: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() bannerHeight: EventEmitter<number> = new EventEmitter<number>();
  @Input() height: number;

  constructor(
    private api: ApiService,
    @Inject(PLATFORM_ID) private platformId: any,
    private currentPage: CurrentPageService,
    private responsive: ResponsiveService) {
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
      if (e.data.type === 'banner_click' && this.data.type === 'html') {
        // console.log(Object.values(this.data.html));
        if (Object.values(this.data.html).indexOf(e.data.id) !== -1) {
          this.link.nativeElement.click();
        }
      }

      // console.log(e);
    });
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.currentPage.value().subscribe(page => {
      this.api.getTopLineBanner(page ? page.type : null, page ? page.id : null).subscribe((response) => {
        this.visible.next(false);
        this.show = true;
        this.data = response.data;
        this.api.getAdvertisementClosingReasons().subscribe(data => {
          this.closingReasons = data.reasons;
        });
        this.bannerHeight.emit(this.getBannerHeight());
        this.inited = true;
        this.visible.next(true);
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
      if (this.show) {
        this.bannerHeight.emit(this.getBannerHeight());
      }
    });
  }

  // checkScroll() {
  //   const windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (windowScroll >= this.topHeaderHeight) {
  //     // this.show = true;
  //   }
  // }

  getBannerHeight() {
    if (this.screen !== 'sm') {
      return 100;
    } else {
      return 170 * (window.outerWidth / 768);
    }
  }

  getScale() {
    if (this.screen !== 'sm') {
      return null;
    } else {
      return 'scale(' + (window.outerWidth / 768) + ')';
    }
  }
}
