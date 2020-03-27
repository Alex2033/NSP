import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {ApiService} from '../../../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {ApartmentComplex} from '../../../../shared/contracts/apartment-complex';
import {ArticleCard} from '../../../../shared/contracts/article-card';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  static areas = [];
  areas = [];
  screen: string;
  articles: ArticleCard[] = [];
  objectsCount: number;
  objects: ApartmentComplex[] = [];

  types = [
    {
      id: null,
      value: 'Все типы'
    },
    {
      id: 1,
      value: 'Коммерческая'
    },
    {
      id: 2,
      value: 'Жилая'
    },
    {
      id: 3,
      value: 'Апартаменты'
    },
    {
      id: 4,
      value: 'ИЖС'
    }
  ];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    protected title: Title,
    private responsive: ResponsiveService
  ) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.title.setTitle('Объекты недвижимости' + ' - NSP.ru');
    this.route.data.subscribe(data => {
      this.objectsCount = data.objects.count;
      this.objects = data.objects.items;
      this.articles = data.articles.items;
    });
    if (IndexComponent.areas.length === 0) {
      this.api.getAreas().subscribe(activities => {
        IndexComponent.areas = activities.items.map(x => {
          return {
            id: x.id,
            value: x.name
          };
        });

        IndexComponent.areas.unshift({
          id: null,
          value: 'Все районы'
        });
        this.areas = IndexComponent.areas;
      });
    } else {
      this.areas = IndexComponent.areas;
    }
  }
  applySearch(filter) {
    this.router.navigate(['/objects'], {queryParams: {search: filter.search, area_id: filter.area_id, type_id: filter.type_id}});
  }
}
