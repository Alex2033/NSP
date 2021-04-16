import {AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {NgScrollbar} from 'ngx-scrollbar';
import {ApiService} from '../../../services/api.service';
import {finalize} from 'rxjs/operators';
import {fadeInOutAnimation} from '../../../animations/fade-in-out.animation';

@Component({
  selector: 'app-latest-news-card',
  templateUrl: './latest-news-card.component.html',
  styleUrls: ['./latest-news-card.component.scss'],
  animations: [
    fadeInOutAnimation()
  ]
})
export class LatestNewsCardComponent implements OnInit, AfterViewInit {
  @ViewChild('feed', {static: true}) feed: ElementRef;
  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;
  @ViewChild(NgScrollbar, {static: true}) scrollbarRef: NgScrollbar;
  screen: string;
  loading = false;
  hasMoreBlocks = true;
  @Input() card;

  constructor(private responsive: ResponsiveService, @Inject(PLATFORM_ID) private platformId: any, private api: ApiService) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  ngAfterViewInit() {
    this.scrollbarRef.scrolled.subscribe((event) => {
      if (this.hasMoreBlocks && !this.loading) {
        const offset = 500;
        if (event.target.scrollTop > event.target.scrollHeight - event.target.offsetHeight - offset) {
          this.loading = true;
          this.api.getLatestArticles(this.card.id, this.card.articles[this.card.articles.length - 1].publishedAt).pipe(finalize(() => {
            this.loading = false;
          })).subscribe((response) => {
            if (response.items.length === 0) {
              this.hasMoreBlocks = false;
            } else {
              this.card.articles = [...this.card.articles, ...response.items];
            }
          });
        }
      }

    });
  }
}
