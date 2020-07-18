import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {MenuService} from './shared/services/menu.service';
import {trigger, transition, style, animate} from '@angular/animations';
import {ResponsiveService} from './shared/services/responsive.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {HeaderHeightService} from './shared/services/header-height.service';
import {isPlatformBrowser} from '@angular/common';
import {AuthService} from './shared/services/auth.service';
import {LoaderService} from './shared/services/loader.service';

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
  firstLoading = true;
  screen: string;
  margin: number = 0;
  showPanels = true;

  constructor(public menu: MenuService,
              private responsive: ResponsiveService,
              private router: Router,
              protected title: Title,
              protected meta: Meta,
              private auth: AuthService,
              private headerHeight: HeaderHeightService,
              private loader: LoaderService,
              @Inject(PLATFORM_ID) private platformId) {
  }

  ngOnInit() {
    this.loader.state.subscribe((show) => {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          if (!this.firstLoading) {
            this.loading = show;
          }
        });
      }
    });
    this.loader.panelsState.subscribe((value) => {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.showPanels = value;
        });
      }
    });
    if (this.auth.check()) {
      this.auth.loadInfo().subscribe();
    }
    this.auth.afterLogin.subscribe(() => {
      this.auth.loadInfo().subscribe();
    });

    this.headerHeight.getValue().subscribe(value => {
      this.margin = value;
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            this.loader.show();
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
        this.firstLoading = false;
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            this.loader.hide();
          });
        }
      }
    });

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }
}
