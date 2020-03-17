
import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Company} from '../../../../shared/contracts/company';
import {Title} from '@angular/platform-browser';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  screen: string;

  static activities = [];
  companies: Company[];
  companiesCount: number;
  activities = [];

  constructor(
    private api: ApiService, 
    private route: ActivatedRoute, 
    private router: Router, 
    protected title: Title,
    private responsive: ResponsiveService
  ) {}

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.title.setTitle('Компании' + ' - NSP.ru');
    this.route.data.subscribe(data => {
      this.companiesCount = data.companies.count;
      this.companies = data.companies.items;
    });
    if (IndexComponent.activities.length === 0) {
      this.api.getCompanyActivities().subscribe(activities => {
        IndexComponent.activities = activities.items.map(x => {
          return {
            id: x.id,
            value: x.name
          };
        });

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
