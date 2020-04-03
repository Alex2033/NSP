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
          type: 'article',
          view: 'half'
        },
        {
          type: 'article',
          view: 'half'
        },
        {
          type: 'article',
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
          type: 'article',
          view: 'half'
        },
        {
          type: 'advertising'
        },
        {
          type: 'video',
          size: 'medium-horizontal',
          videoPublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          videoViewsCount: 12453,
          imageXl: 'https://picsum.photos/616/304',
          imageLg: 'https://picsum.photos/616/304',
          imageMd: 'https://picsum.photos/616/304',
          imageSm: 'https://picsum.photos/616/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
          videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
