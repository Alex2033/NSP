import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../../../shared/contracts/company';
import {Meta, Title} from '@angular/platform-browser';
import {ArticleCard} from '../../../../shared/contracts/article-card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  objects = [];
  persons = [];
  screen: string;
  articles: ArticleCard[] = [];

  public placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: 'assets/images/icons/map_pin-red.svg',
    iconImageSize: [32, 40]
  };

  company: Company;

  constructor(
    private responsive: ResponsiveService,
    private route: ActivatedRoute,
    protected title: Title,
    protected meta: Meta) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.route.data.subscribe(data => {
      this.company = data.company.data;
      this.objects = data.company.apartmentComplexes;
      this.persons = data.company.people;
      this.articles = data.articles.items;
      this.title.setTitle((this.company.metaTitle ? this.company.metaTitle : this.company.name + ' - Информация о компании ' + ' - NSP.ru'));
      this.meta.updateTag({
          name: 'description',
          content: this.company.metaDescription ? this.company.metaDescription : this.company.description
        }
      );
      if (this.company.metaKeywords) {
        this.meta.updateTag({
            name: 'keywords',
            content: this.company.metaKeywords
          }
        );
      }
    });
  }

}
