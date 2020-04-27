import {Component, OnInit} from '@angular/core';
import {MenuService} from './shared/services/menu.service';
import {trigger, transition, style, animate} from '@angular/animations';
import {ResponsiveService} from './shared/services/responsive.service';
import {NavigationStart, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import { HeaderHeightService } from './shared/services/header-height.service';
import {CurrentPageService} from './shared/services/current-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({
          opacity: 0
        }),
        animate('200ms', style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate('200ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  screen: string;
  margin: number = 0;
  constructor(public menu: MenuService,
              private responsive: ResponsiveService,
              private router: Router,
              protected title: Title,
              protected meta: Meta,
              private headerHeight: HeaderHeightService) {
  }

  ngOnInit() {
    this.headerHeight.getValue().subscribe(value => {
      this.margin = value;
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.title.setTitle('');
        this.meta.removeTag('name=\'description\'');
        this.meta.removeTag('name=\'keywords\'');
        this.meta.updateTag({
            property: 'og:image',
            content: 'https://nsp.ru/assets/share.jpg'
          }
        );
        this.menu.setProjectMenuElements([]);
      }
    });

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }
}
