import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MenuService} from './shared/services/menu.service';
import {trigger, transition, style, animate} from '@angular/animations';
import {ResponsiveService} from './shared/services/responsive.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {HeaderHeightService} from './shared/services/header-height.service';
import {CurrentPageService} from './shared/services/current-page.service';
import {isPlatformBrowser} from '@angular/common';

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
  loading = false;
  screen: string;
  margin: number = 0;

  constructor(public menu: MenuService,
              private responsive: ResponsiveService,
              private router: Router,
              protected title: Title,
              protected meta: Meta,
              private headerHeight: HeaderHeightService,
              @Inject(PLATFORM_ID) private platformId) {
  }

  ngOnInit() {
    this.headerHeight.getValue().subscribe(value => {
      this.margin = value;
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            this.loading = true;
          });
        }
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
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            this.loading = false;
          });
        }
      }
    });

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }
}
