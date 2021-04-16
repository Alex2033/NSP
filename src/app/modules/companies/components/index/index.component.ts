import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {ApiService} from '../../../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Company} from '../../../../shared/contracts/company';
import {Title} from '@angular/platform-browser';
import {ArticleCard} from '../../../../shared/contracts/article-card';
import {CurrentPageService} from '../../../../shared/services/current-page.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  static activities = [];
  activities = [];
  screen: string;
  companies: Company[];
  companiesCount: number;
  articles: ArticleCard[] = [];
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    protected title: Title,
    private responsive: ResponsiveService,
    private currentPage: CurrentPageService
  ) {}

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.title.setTitle('Компании' + ' - NSP.ru');
    this.route.data.subscribe(data => {
      this.currentPage.next();
      this.companiesCount = data.companies.count;
      this.companies = data.companies.items;
      this.articles = data.articles.items;
    });
    if (IndexComponent.activities.length === 0) {
      this.api.getCompanyActivities().subscribe(activities => {
        IndexComponent.activities = activities.items.map(x => ({
            id: x.id,
            value: x.name
          }));

        IndexComponent.activities.unshift({
          id: null,
          value: 'Все виды деятельности'
        });
        this.activities = IndexComponent.activities;
      });
    } else {
      this.activities = IndexComponent.activities;
    }
  }

  applySearch(filter) {
    if (filter.activity_id) {
      this.router.navigate(['/companies', 'activity', filter.activity_id], {queryParams: {search: filter.search}});
    } else {
      this.router.navigate(['/companies'], {queryParams: {search: filter.search}});
    }
  }
}
