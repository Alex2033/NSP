import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  tags = ['Апартаменты', 'Инвестиции', 'Ипотека', 'Законодательство', 'Частныйсектор'];

  cards = [
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
            view: 'backgroundImage'
          },
        ];
      }
    });
  }

}
