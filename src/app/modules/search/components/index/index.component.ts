import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  screen: string;

  options: [
    {
      id: 1,
      value: 'Компании'
    },
    {
      id: 2,
      value: 'Персоны'
    },
    {
      id: 3,
      value: 'Объекты'
    },
    {
      id: 4,
      value: 'Материалы'
    },
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

  materials = [
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'backgroundImage'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
  ];

  interviews = [
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

  objectCards = [
    {
      type: 'object',
      objectConfig: {
        image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        title: 'ЖК «Новое купчино»',
        geolocation: 'Василеостровский район',
        url: '/'
      }
    },
    {
      type: 'object',
      objectConfig: {
        image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        title: 'ЖК «Новое купчино»',
        geolocation: 'Василеостровский район',
        url: '/'
      }
    },
    {
      type: 'object',
      objectConfig: {
        image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        title: 'ЖК «Новое купчино»',
        geolocation: 'Василеостровский район',
        url: '/'
      }
    },
    {
      type: 'object',
      objectConfig: {
        image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        title: 'ЖК «Новое купчино»',
        geolocation: 'Василеостровский район',
        url: '/'
      }
    }
  ];

  constructor(public responsive: ResponsiveService) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
