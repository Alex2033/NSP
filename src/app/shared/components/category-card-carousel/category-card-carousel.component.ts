import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-card-carousel',
  templateUrl: './category-card-carousel.component.html',
  styleUrls: ['./category-card-carousel.component.scss']
})
export class CategoryCardCarouselComponent implements OnInit {
  @Input() header: string;
  categories = [
    {
      name: 'Подтема 1',
      cards: [
        {
          type: 'material',
          view: 'half'
        },
        {
          type: 'material',
          view: 'half'
        },
        {
          type: 'material',
          view: 'half'
        },
        {
          type: 'advertising'
        },
        {
          type: 'video',
        }
      ]
    },
    {
      name: 'Подтема 2',
      cards: [
        {
          type: 'material',
          view: 'half'
        },
        {
          type: 'advertising'
        },
        {
          type: 'video',
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
