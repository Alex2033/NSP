import {Component, OnInit} from '@angular/core';
import {Company} from '../../../../shared/contracts/company';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  cards = [
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
      type: 'video',
      size: 'medium-vertical',
    },
    {
      type: 'advertising',
      size: 'small'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'backgroundImage'
    }
  ];
  personConfig = {
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    name: 'Трошева Ольга Витальевна',
    position: 'Руководитель КЦ «Петербургская Недвижимость»',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel lacinia neque. Sed at felis nec mauris fringilla pharetra eget a odio. In tincidunt maximus ipsum, sed vulputate eros accumsan vitae. Donec sagittis dictum odio, id vehicula ex cond.',
    phone: '+7 (812) 335-55-55',
    email: 'trosheva@spbrealty.ru'
  };

  companyConfig: Company = {
    id: 1,
    slug: 'best',
    logoXl: 'assets/images/cards/company/company.jpg',
    logoLg: 'assets/images/cards/company/company.jpg',
    logoMd: 'assets/images/cards/company/company.jpg',
    logoSm: 'assets/images/cards/company/company.jpg',
    name: 'БестЪ. Коммерческая недвижимость',
    phone: '+7 (812) 380–03–55',
    site: 'bestgroup.ru',
    activityName: 'Агентство недвижимости'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
