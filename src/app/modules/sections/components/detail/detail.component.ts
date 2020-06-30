import {Component, OnInit, ViewChild, AfterViewInit, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {NgScrollbar} from 'ngx-scrollbar';
import {Section} from '../../../../shared/contracts/section';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ApiService} from '../../../../shared/services/api.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar;
  blockLoading = false;
  section: Section;
  scrollPosition: number = 0;
  showLeftControl: boolean = false;
  showRightControl: boolean = true;
  screen: string;
  entryDateValue: Date = new Date();
  hasMoreBlocks: boolean;
  cards = [];

  constructor(public responsive: ResponsiveService,
              private route: ActivatedRoute,
              @Inject(PLATFORM_ID) private platformId: any,
              protected title: Title,
              protected meta: Meta,
              private api: ApiService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.section = data.config.data as Section;
      this.hasMoreBlocks = true;
      this.cards = this.section.cards.map(card => {
        return card;
      });
      this.title.setTitle(this.section.metaTitle ? this.section.metaTitle : this.section.title + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.section.metaDescription ? this.section.metaDescription : ''
        }
      );
      this.meta.updateTag({
          name: 'keywords',
          content: this.section.metaKeywords ? this.section.metaKeywords : ''
        }
      );
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  entryDate(event: MatDatepickerInputEvent<Date>) {
    this.entryDateValue = event.value;
  }

  ngAfterViewInit() {

    if (this.screen === 'sm') {
      this.scrollbarRef.scrolled.subscribe(e => {
        this.scrollPosition = e.target.scrollLeft;

        if (!this.showRightControl) {
          this.showRightControl = true;
        }

        if (this.scrollPosition > 0) {
          this.showLeftControl = true;
        } else {
          this.showLeftControl = false;
        }
      });
    }
  }

  loadBlock() {
    this.blockLoading = true;
    let offset = 0;
    let lastCard;
    do {
      // Нужно найти последнюю плитку, которая не является рекламой
      offset++;
      lastCard = this.cards[this.cards.length - offset];
    } while (!lastCard.techPublishedAt && !lastCard.videoPublishedAt);
    console.log(lastCard);
    this.api.getCardFeed(
      {
        ...this.section.cardsFilter,
        ...{
          published_till: lastCard.techPublishedAt ? lastCard.techPublishedAt : lastCard.videoPublishedAt
        }
      }
    ).subscribe((response) => {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => { // Чтобы не грузил по несколько блоков, т.к. событий скролла очень много
          this.blockLoading = false;
        }, 300);
      }
      this.cards = [...this.cards, ...response.cards];
      if (response.cards.length === 0) {
        this.hasMoreBlocks = false;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Проверка, что до нижней границы списка плиток осталось менее Х пикселей
    if (!this.blockLoading && this.isInViewport(document.querySelector('app-card-layout'))) {
      if (this.hasMoreBlocks) {
        this.loadBlock();
      }
    }
  }

  isInViewport(elem) {
    const distance = elem.getBoundingClientRect();
    return (
      distance.bottom - 200 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  hideRightControl() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.showRightControl = false;
      }, 0);
    }
  }
}
