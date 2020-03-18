import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../../../../shared/contracts/person';
import {ApartmentComplex} from '../../../../shared/contracts/apartment-complex';
import {Company} from '../../../../shared/contracts/company';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  screen: string;

  options = [
    {
      id: null,
      value: 'Все'
    },
    {
      id: 'companies',
      value: 'Компании'
    },
    {
      id: 'persons',
      value: 'Персоны'
    },
    {
      id: 'objects',
      value: 'Объекты'
    },
    {
      id: 'articles',
      value: 'Материалы'
    },
  ];

  constructor(
    public responsive: ResponsiveService,
    private router: Router,
    protected title: Title,
    private route: ActivatedRoute) {
  }

  results: {
    companies: {
      count: number;
      items: Company[];
    },

    articles: {
      count: number;
      items: any[];
    }

    persons: {
      count: number;
      items: Person[];
    }

    objects: {
      count: number;
      items: ApartmentComplex[];
    }
  };

  type: string;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params.type;
    });
    this.route.data.subscribe(data => {
      this.results = data.results;
    });

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.title.setTitle('Результаты поиска' + ' - NSP.ru');
  }
  applySearch(filter) {
    if (filter.type) {
      this.router.navigate(['/search'], {queryParams: {search: filter.search, type: filter.type}});
    } else {
      this.router.navigate(['/search'], {queryParams: {search: filter.search}});
    }
  }
}
