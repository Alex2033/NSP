import { Component, OnInit } from '@angular/core';
import { MenuService } from './shared/services/menu.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { ResponsiveService } from './shared/services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({
          opacity:0
        }),
        animate('200ms', style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate('200ms', style({opacity:0}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  screen: string;

  constructor(public menu: MenuService, private responsive: ResponsiveService) {}

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }
}
