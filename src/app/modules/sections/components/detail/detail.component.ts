import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  screen: string;
  entryDateValue: Date = new Date();

  tags = ['Апартаменты', 'Инвестиции', 'Ипотека', 'Законодательство', 'Частныйсектор'];

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
      ],
    }
  };

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  entryDate(event: MatDatepickerInputEvent<Date>) {
    this.entryDateValue = event.value;
  }

}
