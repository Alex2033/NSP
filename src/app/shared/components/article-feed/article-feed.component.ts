import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Article} from '../../contracts/article';
import {ResponsiveService} from '../../services/responsive.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {ApiService} from '../../services/api.service';
import {isPlatformBrowser, isPlatformServer, Location} from '@angular/common';
import {ResponseService} from '../../services/response.service';

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
  tryToLoadArticle = true;
  viewedArticles = [];

  constructor(private responsive: ResponsiveService,
              private route: ActivatedRoute,
              protected title: Title,
              protected meta: Meta,
              private location: Location,
              private api: ApiService,
              private response: ResponseService,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      if (this.location.path() !== '/' + data.config.data.id + '-' + data.config.data.slug) {
        this.response.permanentRedirect('/' + data.config.data.id + '-' + data.config.data.slug);
      }
      this.articles = [];
      this.tryToLoadArticle = true;
      this.addArticleToFeed(data.config.data as Article);
      this.setCurrentArticle(data.config.data.id);
      this.addArticleToViewed(data.config.data.id);
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  addArticleToFeed(article) {
    this.articles.push(article);
  }

  addArticleToViewed(articleId) {
    if (this.viewedArticles.findIndex(x => x === articleId) === -1) {
      this.viewedArticles.push(articleId);
      this.api.addArticleView(articleId).subscribe();
    }
  }

  setCurrentArticle(articleId) {
    this.addArticleToViewed(articleId);
    this.currentArticleId = articleId;
    const article = this.articles.find(x => x.id === articleId);
    this.title.setTitle(article.metaTitle ? article.metaTitle : article.title + ' - NSP.ru');
    this.meta.updateTag({
        name: 'description',
        content: article.metaDescription ? article.metaDescription : ''
      }
    );
    this.meta.updateTag({
        name: 'keywords',
        content: article.metaKeywords ? article.metaKeywords : ''
      }
    );

    // TODO Добавить смену ссылки браузере
  }

  loadNextArticle() {
    this.articleLoading = true;
    const exclude = this.articles.map(article => article.id);
    this.api.getNextArticle(this.articles[this.articles.length - 1].id, exclude).subscribe((data) => {
      if (data.id) { // Есть следующая статья
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => { // Чтобы не грузил по несколько статей, т.к. событий скролла очень много
            this.articleLoading = false;
          }, 300);
        }
        this.addArticleToFeed(data);
      } else {
        this.tryToLoadArticle = false;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Проверка, что до нижней границы списка стетей осталось менее Х пикселей
    if (this.tryToLoadArticle && !this.articleLoading && this.isInViewport(document.querySelector('.article-feed'))) {
      this.loadNextArticle();
    }
    const articles = document.querySelectorAll('app-article');
    articles.forEach((article) => {
      const distance = article.getBoundingClientRect();
      if (distance.top < (window.innerHeight / 2) && distance.bottom > 0) {
        this.setCurrentArticle(parseInt(article.getAttribute('data-article-id'), 10));
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
