import { Component, OnInit } from '@angular/core';
import {Quote} from '../../../../shared/contracts/quote';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ApiService} from '../../../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  screen: string;
  quotesCount: number;
  quotes: Quote[] = [];
  asideCards = [];
  constructor(
    private responsive: ResponsiveService,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    protected title: Title) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.title.setTitle('Цитаты' + ' - NSP.ru');
    this.route.data.subscribe(data => {
      this.quotesCount = data.quotes.count;
      this.quotes = data.quotes.items;
      this.asideCards = data.asideCards.cards;
    });
  }
  applySearch(filter) {
    this.router.navigate(['/quotes'], {queryParams: {search: filter.search}});
  }
}
