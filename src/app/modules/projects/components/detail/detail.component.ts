import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  categories = ['Подобрать ЖК', 'Технология строительства', 'Новости', 'Интервью', 'Аналитика', 'Выборгский район', 'Московский район'];

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

  constructor() { }

  ngOnInit() {
  }

}
