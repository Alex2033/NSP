import {Component, ElementRef, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-latest-news-card',
  templateUrl: './latest-news-card.component.html',
  styleUrls: ['./latest-news-card.component.scss']
})
export class LatestNewsCardComponent implements OnInit {
  @ViewChild('feed', {static: true}) feed: ElementRef;
  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;
  screen: string;
  visibleArticles = [];

  @Input() articles = [];

  constructor(private responsive: ResponsiveService, @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.rebuildVisible();
  }

  @HostListener('window:resize', ['$event']) changeNav() {
    this.rebuildVisible();
  }

  rebuildVisible() {
    this.visibleArticles = this.articles;
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        if (this.feed.nativeElement.clientHeight > this.wrapper.nativeElement.clientHeight) {
          let popCount = 1;
          let heightSum = 0;
          for (let i = this.feed.nativeElement.children.length - 1; i >= 0; i--) {
            const style = getComputedStyle(this.feed.nativeElement.children[i]);

            heightSum += this.feed.nativeElement.children[i].offsetHeight + parseInt(style.marginBottom, 10);
            if (this.feed.nativeElement.clientHeight - heightSum > this.wrapper.nativeElement.clientHeight) {
              popCount++;
            } else {
              break;
            }
          }
          let i = 0;
          while (i < popCount) {
            this.visibleArticles.pop();
            i++;
          }
        }
      });
    }
  }
}
