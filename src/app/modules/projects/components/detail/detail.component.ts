import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  screen: string;

  categories = [
    'Подобрать ЖК',
    'Технология строительства',
    'Новости',
    'Интервью',
    'Аналитика',
    'Выборгский район',
    'Московский район'
  ];

  config = [
    {
      subtopic: 'Все',
      cards: [0, 1, 2, 3, 4, 5]
    },
    {
      subtopic: 'Подтема 1',
      cards: [0, 1, 2]
    },
    {
      subtopic: 'Подтема 2',
      cards: [0, 1]
    },
  ];

  news = [
    {
      header: 'Новости долевки',
      slides: [
        '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
        'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
        'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
        'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
        'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
        'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
        'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
        '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
      ]
    },
  ];

  cards = {
    resolutions: {
      desktop: [
        {
          type: 'front'
        },
        {
          type: 'slider'
        },
        {
          type: 'material',
          size: 'small',
          view: 'half'
        },
        {
          type: 'material-list',
          size: 'small',
          view: 'half',
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
          size: 'medium-horizontal',
          view: 'half'
        },
        {
          type: 'material',
          size: 'medium-vertical',
          view: 'half'
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
          size: 'large',
          view: 'full'
        },
        {
          type: 'material',
          size: 'small',
          view: 'full'
        },
      ],
      smallDesktop: [
        {
          type: 'front'
        },
        {
          type: 'slider'
        },
        {
          type: 'material',
          size: 'small',
          view: 'half'
        },
        {
          type: 'material-list',
          size: 'small',
          view: 'half',
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
          view: 'half'
        },
        {
          type: 'material',
          size: 'small',
          view: 'half'
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
          view: 'half'
        },
        {
          type: 'material',
          size: 'small',
          view: 'full'
        },
      ],
      tablet: [
        {
          type: 'front'
        },
        {
          type: 'slider'
        },
        {
          type: 'material',
          size: 'small',
          view: 'half'
        },
        {
          type: 'material-list',
          size: 'small',
          view: 'half',
          position: {
            x: 1,
            y: 2
          }
        },
        {
          type: 'latest-news',
          position: {
            x: 1,
            y: 4
          }
        },
        {
          type: 'material',
          size: 'small',
          view: 'half'
        },
        {
          type: 'material',
          size: 'small',
          view: 'half'
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
            y: 6
          }
        },
        {
          type: 'material',
          size: 'small',
          view: 'half'
        },
        {
          type: 'material',
          size: 'small',
          view: 'full'
        },
      ],
      mobile: [
        {
          type: 'slider'
        },
        {
          type: 'material-list',
          size: 'small',
          view: 'half',
          position: {
            x: 1,
            y: 5
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
          view: 'half'
        },
        {
          type: 'video',
          size: 'small'
        },
        {
          type: 'material-list',
          size: 'small',
          view: 'readBlock',
          position: {
            x: 1,
            y: 6
          }
        },
        {
          type: 'material',
          size: 'small',
          view: 'half'
        },
        {
          type: 'material',
          size: 'small',
          view: 'full'
        },
      ],
    }
  };

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
