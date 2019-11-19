import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  objectCards = [
    {
      type: 'object'
    },
    {
      type: 'object'
    },
    {
      type: 'object'
    },
    {
      type: 'object'
    }
  ];

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

  constructor() { }

  ngOnInit() {
  }

}
