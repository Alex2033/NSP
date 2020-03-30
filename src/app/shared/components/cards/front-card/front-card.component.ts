import {Component, Input, OnInit} from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ArticleCard} from '../../../contracts/article-card';
import {FrontArticleCard} from '../../../contracts/front-article-card';

@Component({
  selector: 'app-front-card',
  templateUrl: './front-card.component.html',
  styleUrls: ['./front-card.component.scss']
})
export class FrontCardComponent implements OnInit {
  screen: string;
  @Input() data: FrontArticleCard;

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
