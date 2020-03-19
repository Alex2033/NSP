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
            x: 4,
            y: 3
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
      smallDesktop: [
        {
          type: 'front'
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
            x: 2,
            y: 3
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
            x: 1,
            y: 3
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
          type: 'front'
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
