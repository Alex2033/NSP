import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Article} from '../../contracts/article';
import {ResponsiveService} from '../../services/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ApiService} from '../../services/api.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
  styleUrls: ['./article-feed.component.scss']
})
export class ArticleFeedComponent implements OnInit {
  currentArticleId: number;
  articleLoading = false;
  screen: string;
  articles: Article[];

  constructor(private responsive: ResponsiveService,
              private route: ActivatedRoute,
              protected title: Title,
              protected meta: Meta,
              private api: ApiService,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.articles = [];
      this.addArticleToFeed(data.data as Article);
      this.setCurrentArticle(data.data.id);
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  addArticleToFeed(article) {
    this.articles.push(article);
  }

  setCurrentArticle(articleId) {
    this.currentArticleId = articleId;
    const article = this.articles.find(x => x.id === articleId);
    this.title.setTitle(article.metaTitle ? article.metaTitle : article.title + ' - NSP.ru');
    this.meta.updateTag({
        name: 'description',
        content: article.metaDescription
      }
    );
    this.meta.updateTag({
        name: 'keywords',
        content: article.metaKeywords
      }
    );

    // TODO Добавить смену ссылки браузере
  }

  loadNextArticle() {
    this.articleLoading = true;
    this.api.getNextArticle(this.articles[this.articles.length - 1].id).subscribe((data) => {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => { // Чтобы не грузил по несколько статей, т.к. событий скролла очень много
          this.articleLoading = false;
        }, 300);
      }
      this.addArticleToFeed(data);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Проверка, что до нижней границы списка стетей осталось менее Х пикселей
    if (!this.articleLoading && this.isInViewport(document.querySelector('.article-feed'))) {
      this.loadNextArticle();
    }
    const articles = document.querySelectorAll('app-article');
    let found = false;
    articles.forEach((article) => {
      if (!found) {
        const distance = article.getBoundingClientRect();
        if (distance.top < 0 && distance.bottom > 0) {
          found = true;
          this.setCurrentArticle(parseInt(article.getAttribute('data-article-id'), 10));
        }
      }
    });
  }

  isInViewport(elem) {
    const distance = elem.getBoundingClientRect();
    return (
      distance.bottom - 200 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
