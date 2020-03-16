import {Component, OnInit} from '@angular/core';
import {MenuService} from './shared/services/menu.service';
import {trigger, transition, style, animate} from '@angular/animations';
import {ResponsiveService} from './shared/services/responsive.service';
import {NavigationStart, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

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

  constructor(public menu: MenuService,
              private responsive: ResponsiveService,
              private router: Router,
              protected title: Title,
              protected meta: Meta) {
  }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.title.setTitle('');
        this.meta.updateTag({
            name: 'description',
            content: ''
          }
        );
        this.meta.updateTag({
            name: 'keywords',
            content: ''
          }
        );
        this.meta.removeTag('name=\'description\'');
        this.meta.removeTag('name=\'keywords\'');
        this.meta.updateTag({
            property: 'og:image',
            content: 'https://nsp.ru/assets/share.jpg'
          }
        );
      }
    });

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }
}
