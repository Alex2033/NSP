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
  @Input() article: Article;

  constructor(private responsive: ResponsiveService) {
  }

  ngOnInit() {
    if (this.article.event) {
      const datePipe = new DatePipe('ru-RU');
      const startDate = new Date(this.article.event.startedAt * 1000);
      const finishDate = new Date(this.article.event.finishedAt * 1000);

      this.eventDisplayDate = datePipe.transform(this.article.event.startedAt * 1000, 'd MMMM yyyy');
      if (startDate.getFullYear().toString() + startDate.getMonth().toString() + startDate.getDate().toString() !== finishDate.getFullYear().toString() + finishDate.getMonth().toString() + finishDate.getDate().toString()) {
        if (startDate.getHours() !== 0 || startDate.getMinutes() !== 0) {
          this.eventDisplayDate += ' ' + datePipe.transform(this.article.event.startedAt * 1000, 'shortTime');
        }

        this.eventDisplayDate += ' — ' + datePipe.transform(this.article.event.finishedAt * 1000, 'd MMMM yyyy');
        if (finishDate.getHours() !== 0 || finishDate.getMinutes() !== 0) {
          this.eventDisplayDate += ' ' + datePipe.transform(this.article.event.finishedAt * 1000, 'shortTime');
        }
      } else {
        if (startDate.getHours() !== 0 || startDate.getMinutes() !== 0) {
          this.eventDisplayDate += ' ' + datePipe.transform(this.article.event.startedAt * 1000, 'shortTime');
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

}
