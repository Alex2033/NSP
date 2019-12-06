import { Component, OnInit } from '@angular/core';

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
      cards: [1, 2, 3, 4, 5, 6]
    },
    {
      subtopic: 'Подтема 1',
      cards: [1, 2, 3]
    },
    {
      subtopic: 'Подтема 2',
      cards: [1, 2]
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

  constructor() { }

  ngOnInit() {
  }

}
