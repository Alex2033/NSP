import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  cards = [
    {
      type: 'material',
      size: 'small',
      view: 'backgroundImage'
    },
    {
      type: 'material',
      size: 'small',
      view: 'backgroundImage'
    },
    {
      type: 'material',
      size: 'small',
      view: 'backgroundImage'
    },
    {
      type: 'material',
      size: 'small',
      view: 'backgroundImage'
    }
  ];
  persons = [
    {
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      firstName: 'Глебова',
      middleName: 'Елена',
      lastName: 'Александровна',
      text: 'БестЪ. Коммерческая недвижимость» Руководитель отдела продаж'
    },
    {
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      firstName: 'Демешенков',
      middleName: 'Вадим',
      lastName: 'Николаевич',
      text: 'Руководитель отдела офисной недвижимости «БестЪ. Коммерческая недвижимость»'
    },
    {
      image: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      firstName: 'Лушников',
      middleName: 'Андрей',
      lastName: 'Владимирович',
      text: 'председатель Совета директоров ГК «БестЪ»'
    },
    {
      image: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      firstName: 'Свояволя',
      middleName: 'Ян',
      lastName: '',
      text: 'Директор по маркетингу ООО «Главстрой-СПб»'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
