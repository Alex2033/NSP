import {Component, OnInit} from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ApiService} from '../../../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Person} from '../../../../shared/contracts/person';
import {ArticleCard} from '../../../../shared/contracts/article-card';
import {CurrentPageService} from '../../../../shared/services/current-page.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  screen: string;

  personsCount: number;
  persons: Person[] = [];
  articles: ArticleCard[] = [];
  constructor(
    private responsive: ResponsiveService,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    protected title: Title,
    private currentPage: CurrentPageService) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.route.data.subscribe(data => {
      this.title.setTitle('Персоны' + ' - NSP.ru');
      this.currentPage.next();
      this.personsCount = data.persons.count;
      this.persons = data.persons.items;
      this.articles = data.articles.items;
    });
  }

  applySearch(filter) {
    this.router.navigate(['/persons'], {queryParams: {search: filter.search}});
  }
}
