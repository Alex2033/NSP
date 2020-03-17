import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {ApartmentComplex} from '../../../../shared/contracts/apartment-complex';

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
  objects: any[] = [
    {
      id: 1,
      name: 'ЖК «Новое купчино»',
      areaName: 'Василеостровский район',
      imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      name: 'ЖК «Новый Лесснер»',
      areaName: 'Московский район',
      imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      name: 'ЖК «LIFE-Лесная»',
      areaName: 'Выборгский район',
      imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 4,
      name: 'ЖК «Новый Лесснер»',
      areaName: 'Московский район',
      imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    }
  ];

  options1: [
    {
      id: 1,
      value: 'Вариант 1'
    },
    {
      id: 2,
      value: 'Вариант 2'
    },
    {
      id: 3,
      value: 'Вариант 3'
    }
  ];

  options2: [
    {
      id: 1,
      value: 'Вариант 1'
    },
    {
      id: 2,
      value: 'Вариант 2'
    },
    {
      id: 3,
      value: 'Вариант 3'
    }
  ];

  constructor(public responsive: ResponsiveService) {
  }

  ngOnInit() {
    this.objects = this.objects.map(x => {
      return {
        type: 'object',
        data: x
      };
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
