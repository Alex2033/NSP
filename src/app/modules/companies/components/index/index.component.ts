<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
=======
import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Company} from '../../../../shared/contracts/company';
import {Title} from '@angular/platform-browser';
>>>>>>> 07186ba0688f7dd6d541d015bf1b21636f5390c9

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
<<<<<<< HEAD
  screen: string;

  companies = [ 
    { image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', title: 'БестЪ. Коммерческая недвижимость', phone: '+7 (812) 380–03–55', site: 'bestgroup.ru', tag: 'Агентство недвижимости' }, 
    { image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', title: 'Комплекс апарт-отелей VALO', phone: '+7 (812) 411–00–00', site: 'valoapart.ru', tag: 'Агентство недвижимости' }, 
    { image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', title: 'ООО ИСК Отделстрой', phone: '+7 (812) 596-59-70', site: 'otdelstroy.spb.ru', tag: 'Экспертиза' }, 
    { image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', title: 'Группа ЦДС', phone: '+7 (812) 320–12–00', site: 'cds.spb.ru', tag: 'Строительные материалы/технологии' }, 
  ];

  selectConfig = {
    name: 'Вид деятельности',
    options: [
      'Вариант 1',
      'Вариант 2',
      'Вариант 3'
    ]
  };

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
=======
  static activities = [];
  companies: Company[];
  companiesCount: number;
  activities = [];
  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router, protected title: Title) {
  }

  ngOnInit() {
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
>>>>>>> 07186ba0688f7dd6d541d015bf1b21636f5390c9
  }

  applySearch(filter) {
    if (filter.activity_id) {
      this.router.navigate(['/companies', 'activity', filter.activity_id], {queryParams: {search: filter.search}});
    } else {
      this.router.navigate(['/companies'], {queryParams: {search: filter.search}});
    }
  }
}
