import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  categories = ['Подобрать ЖК', 'Технология строительства', 'Новости', 'Интервью', 'Аналитика', 'Выборгский район', 'Московский район'];

  config = [
    {
      subtopic: 'Все',
      cards: [
        {text: 'Все 1!'},
        {text: 'Все 2!'},
        {text: 'Все 3!'},
        {text: 'Все 4!'},
        {text: 'Все 5!'},
        {text: 'Все 6!'},
      ]
    },
    {
      subtopic: 'Подтема 1',
      cards: [
        {text: 'Подтема 1!'},
        {text: 'Подтема 2!'},
        {text: 'Подтема 3!'},
      ]
    },
    {
      subtopic: 'Подтема 2',
      cards: [
        {text: 'Подтема 2 1!'},
        {text: 'Подтема 2 2!'},
      ]
    },
  ];

  cards = [
    {
      type: 'front'
    },
    {
      type: 'slider'
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

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      if (screen === 'xl') {
        this.cards = [
          {
            type: 'front'
          },
          {
            type: 'slider'
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
        ];
      } else if (screen === 'lg') {
        this.cards = [
          {
            type: 'front'
          },
          {
            type: 'slider'
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
        ];
      } else if (screen === 'md') {
        this.cards = [
          {
            type: 'front'
          },
          {
            type: 'slider'
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
              y: 6
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
        ];
      }
    });
  }

}
