import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-latest-news-card',
  templateUrl: './latest-news-card.component.html',
  styleUrls: ['./latest-news-card.component.scss']
})
export class LatestNewsCardComponent implements OnInit {
  screen: string;

  constructor(private responsive: ResponsiveService) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
