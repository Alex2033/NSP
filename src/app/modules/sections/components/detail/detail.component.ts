import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar;

  scrollPosition: number = 0;
  showLeftControl: boolean = false;
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
          view: 'full'
        },
      ],
      mobile: [
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
          type: 'material',
          size: 'small',
          view: 'half'
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

  ngAfterViewInit() {

    if (this.screen === 'sm') {
      this.scrollbarRef.scrolled.subscribe(e => {
        this.scrollPosition = e.target.scrollLeft;

        if (this.scrollPosition > 0) {
          this.showLeftControl = true;
        } else {
          this.showLeftControl = false;
        }
      });
    }

  }
}
