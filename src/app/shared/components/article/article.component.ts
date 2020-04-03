import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {Article} from '../../contracts/article';
import {Project} from '../../contracts/project';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  screen: string;
  article: Article;
  constructor(private responsive: ResponsiveService,
              private route: ActivatedRoute,
              protected title: Title,
              protected meta: Meta) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.article = data.data as Article;
      this.title.setTitle(this.article.metaTitle ? this.article.metaTitle : this.article.title + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.article.metaDescription
        }
      );
      this.meta.updateTag({
          name: 'keywords',
          content: this.article.metaKeywords
        }
      );
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
