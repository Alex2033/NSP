import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../../../shared/contracts/company';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  objects = [];
  persons = [];
  materialCards = [
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    }
  ];

  public placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: 'assets/images/icons/map_pin-red.svg',
    iconImageSize: [32, 40]
  };

  company: Company;

  constructor(private route: ActivatedRoute,
              protected title: Title,
              protected meta: Meta) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.company = data.company.data;
      this.objects = data.company.apartmentComplexes;
      this.persons = data.company.people;
      this.title.setTitle(this.company.name + ' - Информация о компании ' + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.company.description
        }
      );
    });
  }

}
