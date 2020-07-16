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
  exclude = [];

  constructor(private responsive: ResponsiveService,
              private route: ActivatedRoute,
              private router: Router,
              protected title: Title,
              protected meta: Meta,
              private location: Location,
              private api: ApiService,
              private response: ResponseService,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && window.history.state.exclude) {
      this.exclude = window.history.state.exclude;
    }
    console.log(this.exclude);
    this.route.data.subscribe((data) => {
      if (this.location.path().split('?')[0] !== '/' + data.config.data.id + '-' + data.config.data.slug) {
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
    if (this.exclude.findIndex(x => x === article.id) === -1) {
      this.exclude.push(article.id);
    }
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
        content: article.metaDescription ? article.metaDescription : article.previewText ? article.previewText : ''
      }
    );
    this.meta.updateTag({
        name: 'keywords',
        content: article.metaKeywords ? article.metaKeywords : ''
      }
    );
    if (article.image) {
      this.meta.updateTag({
          property: 'og:image',
          content: article.image
        }
      );
    }

    // TODO Добавить смену ссылки браузере
  }

  loadNextArticle() {
    this.articleLoading = true;
    this.api.getNextArticle(this.articles[this.articles.length - 1].id, this.exclude).subscribe((data) => {
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
      distance.bottom - 500 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
