import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-front-card',
  templateUrl: './front-card.component.html',
  styleUrls: ['./front-card.component.scss']
})
export class FrontCardComponent implements OnInit {
  screen: string;

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
