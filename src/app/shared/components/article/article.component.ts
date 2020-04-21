import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';
import {Article} from '../../contracts/article';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  screen: string;
  eventDisplayDate: string;
  allowEventRegistration = false;
  @Input() article: Article;

  constructor(private responsive: ResponsiveService) {
  }

  ngOnInit() {
    if (this.article.event) {
      const currentDate = new Date();
      if (currentDate.getTime() / 1000 < this.article.event.startedAt) {
        this.article.content.map(block => {
          if (block.type === 'event_registration' && block.data.id === this.article.event.id) {
            this.allowEventRegistration = true;
          }
        });
      }

      const datePipe = new DatePipe('ru-RU');
      const startDate = new Date(this.article.event.startedAt * 1000);
      const finishDate = new Date(this.article.event.finishedAt * 1000);
      this.eventDisplayDate = datePipe.transform(this.article.event.startedAt * 1000, 'd MMMM yyyy');
      if (startDate.getFullYear().toString() + startDate.getMonth().toString() + startDate.getDate().toString() !== finishDate.getFullYear().toString() + finishDate.getMonth().toString() + finishDate.getDate().toString()) {
        if (startDate.getHours() !== 0 || startDate.getMinutes() !== 0) {
          this.eventDisplayDate += ', ' + datePipe.transform(this.article.event.startedAt * 1000, 'shortTime');
        }

        this.eventDisplayDate += ' — ' + datePipe.transform(this.article.event.finishedAt * 1000, 'd MMMM yyyy');
        if (finishDate.getHours() !== 0 || finishDate.getMinutes() !== 0) {
          this.eventDisplayDate += ', ' + datePipe.transform(this.article.event.finishedAt * 1000, 'shortTime');
        }
      } else {
        if (startDate.getHours() !== 0 || startDate.getMinutes() !== 0) {
          this.eventDisplayDate += ', ' + datePipe.transform(this.article.event.startedAt * 1000, 'shortTime');
          if (startDate.getHours() + startDate.getMinutes() !== finishDate.getHours() + finishDate.getMinutes()) {
            this.eventDisplayDate += ' — ' + datePipe.transform(this.article.event.finishedAt * 1000, 'shortTime');
          }
        }
      }
    }
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  scrollToEventRegistrationBlock() {
    const el = document.getElementById('event-' + this.article.event.id + '-registration-block');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

}
