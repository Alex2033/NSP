import {AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ResponsiveService} from '../../../services/responsive.service';
import {NgScrollbar} from 'ngx-scrollbar';
import {ApiService} from '../../../services/api.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-event-calendar-card',
  templateUrl: './event-calendar-card.component.html',
  styleUrls: ['./event-calendar-card.component.scss']
})
export class EventCalendarCardComponent implements OnInit, AfterViewInit {
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
          this.api.getEvents(this.card.type, this.card.id, this.card.events[this.card.events.length - 1].publishedAt).pipe(finalize(() => {
            this.loading = false;
          })).subscribe((response) => {
            if (response.items.length === 0) {
              this.hasMoreBlocks = false;
            } else {
              this.card.events = [...this.card.events, ...response.items];
            }
          });
        }
      }

    });
  }
}
