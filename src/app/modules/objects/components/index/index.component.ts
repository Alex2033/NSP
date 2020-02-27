import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  screen: string;

  cards = {
    resolutions: {
      desktop: [
        {
          type: 'front'
        },
        {
          type: 'material',
          size: 'small',
          view: 'default'
        },
        {
          type: 'material-list',
          size: 'small',
          view: 'default',
          position: {
            x: 4,
            y: 1
          }
        },
        {
          type: 'latest-news',
          position: {
            x: 1,
            y: 2
          }
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
          type: 'advertising',
          size: 'small'
        },
        {
          type: 'video',
          size: 'medium-horizontal'
        },
        {
          type: 'material-list',
          size: 'medium-vertical',
          view: 'readBlock',
          position: {
            x: 4,
            y: 3
          }
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
        },
      ],
      smallDesktop: [
        {
          type: 'front'
        },
        {
          type: 'material',
          size: 'small',
          view: 'default'
        },
        {
          type: 'material-list',
          size: 'small',
          view: 'default',
          position: {
            x: 3,
            y: 1
          }
        },
        {
          type: 'latest-news',
          position: {
            x: 1,
            y: 2
          }
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
          type: 'advertising',
          size: 'small'
        },
        {
          type: 'video',
          size: 'medium-horizontal'
        },
        {
          type: 'material-list',
          size: 'medium-vertical',
          view: 'readBlock',
          position: {
            x: 3,
            y: 2
          }
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
        },
      ],
      tablet: [
        {
          type: 'front'
        },
        {
          type: 'material',
          size: 'small',
          view: 'default'
        },
        {
          type: 'material-list',
          size: 'small',
          view: 'default',
          position: {
            x: 2,
            y: 1
          }
        },
        {
          type: 'latest-news',
          position: {
            x: 1,
            y: 2
          }
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
          type: 'advertising',
          size: 'small'
        },
        {
          type: 'video',
          size: 'medium-horizontal'
        },
        {
          type: 'material-list',
          size: 'medium-vertical',
          view: 'readBlock',
          position: {
            x: 2,
            y: 3
          }
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
        },
      ],
    }
  };

  objects = [ 
    { 
      image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', 
      title: 'ЖК «Новое купчино»', 
      geolocation: 'Василеостровский район', 
      url: '/' 
    }, 
    { 
      image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', 
      title: 'ЖК «Новый Лесснер»', 
      geolocation: 'Московский район', 
      url: '/' 
    }, 
    { 
      image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', 
      title: 'ЖК «ЖК «LIFE-Лесная»', 
      geolocation: 'Выборгский район', 
      url: '/' 
    }, 
    { 
      image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', 
      title: 'ЖК «Новый Лесснер»', 
      geolocation: 'Московский район', 
      url: '/' 
    }
  ];

  selectConfig1 = {
    name: 'Тип объекта',
    options: {
      0: 'Вариант 1',
      1: 'Вариант 2',
      2: 'Вариант 3'
    }
  };

  selectConfig2 = {
    name: 'Выбрать район',
    options: {
      0: 'Вариант 1',
      1: 'Вариант 2',
      2: 'Вариант 3'
    }
  };

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
