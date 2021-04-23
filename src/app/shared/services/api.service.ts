import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ApartmentComplex} from '../contracts/apartment-complex';
import {ApiClientService} from './api-client.service';
import {map} from 'rxjs/operators';
import {deserialize} from '../functions/deseriale';
import {Company} from '../contracts/company';
import {Person} from '../contracts/person';
import {Article} from '../contracts/article';
import {Quote} from '../contracts/quote';
import {ArticleBanner} from '../contracts/article-banner';
import {TopLineBanner} from '../contracts/topline-banner';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiClient: ApiClientService) {
  }

  getCardFeed(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/card_feed`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  getCard(type, id): Observable<any> {
    return this.apiClient.get(`/api/site/card`, {
      params: {
        type,
        id
      }
    }).pipe(map((response) => deserialize(response)));
  }

  getApartmentComplexArticles(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/apartment_complexes/articles`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  getEvents(cardType: string, cardId: number, startedTill: number): Observable<any> {
    return this.apiClient.get(`/api/site/events`, {
      params: {
        card_type: cardType,
        card_id: cardId,
        started_till: startedTill
      }
    }).pipe(map((response) => deserialize(response)));
  }

  getCurrentUserInfo(): Observable<any> {
    return this.apiClient.get(`/api/site/info`);
  }

  loginViaOAuth(provider, params: any) {
    return this.apiClient.get(`/api/site/login/${provider}/token`, {
      params
    });
  }

  logout(): Observable<void> {
    return this.apiClient.post(`/api/site/logout`);
  }

  addComment(resourceType: string, resourceId: number, text: string): Observable<void> {
    return this.apiClient.post(`/api/site/comments`, {
      resource_type: resourceType,
      resource_id: resourceId,
      text
    });
  }

  getComments(resourceType: string, resourceId: number) {
    return this.apiClient.get(`/api/site/comments`, {
      params: {
        resource_type: resourceType,
        resource_id: resourceId
      }
    }).pipe(map((response) => deserialize(response)));
  }

  getLatestArticles(cardId: number, publishedTill: number): Observable<any> {
    return this.apiClient.get(`/api/site/latest_articles`, {
      params: {
        card_id: cardId,
        published_till: publishedTill
      }
    }).pipe(map((response) => deserialize(response)));
  }

  getPersonArticles(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/people/articles`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  getCompanyArticles(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/companies/articles`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  getCompanyApartmentComplexes(companyId): Observable<any> {
    return this.apiClient.get(`/api/site/companies/${companyId}/apartment_complexes`, {}).pipe(map((response) => deserialize(response)));
  }

  getAreas(): Observable<any> {
    return this.apiClient.get(`/api/site/areas`).pipe(map((response) => deserialize(response)));
  }

  getProjectLayout(projectId, screen): Observable<any> {
    return this.apiClient.get(`/api/site/projects/${projectId}/layout?screen=${screen}`).pipe(map((response) => deserialize(response)));
  }

  getQuoteAsideCards(): Observable<any> {
    return this.apiClient.get(`/api/site/quotes/aside_cards`).pipe(map((response) => deserialize(response)));
  }

  getQuotes(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/quotes`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  getHeaderQuote(): Observable<Quote> {
    return this.apiClient.get(`/api/site/quotes/header`).pipe(map((response) => deserialize(response) as Quote));
  }

  getAdvertisementClosingReasons(): Observable<any> {
    return this.apiClient.get(`/api/site/banner_closing_reasons`).pipe(map((response) => deserialize(response)));
  }

  getNextArticle(articleId, exclude: number[]): Observable<Article> {
    return this.apiClient.get(`/api/site/articles/${articleId}/next`, {
      params: {
        'exclude[]': exclude
      }
    }).pipe(map((response) => deserialize(response) as Article));
  }

  getTopLineBanner(pageType, pageId): Observable<{ data: TopLineBanner }> {
    let params;
    if (pageType && pageId) {
      params = {
        page_type: pageType,
        page_id: pageId
      };
    } else {
      params = {};
    }
    return this.apiClient.get(`/api/site/topline_banners/banner`, {params}).pipe(map((response) => deserialize(response) as { data: TopLineBanner }));
  }

  getArticleBanner(articleId): Observable<{ data: ArticleBanner }> {
    return this.apiClient.get(`/api/site/articles/${articleId}/banner`).pipe(map((response) => deserialize(response) as { data: ArticleBanner }));
  }

  getPerson(personId): Observable<Person> {
    return this.apiClient.get(`/api/site/people/${personId}`).pipe(map((response) => deserialize(response) as Person));
  }

  getPersons(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/people`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  addArticleView(articleId) {
    return this.apiClient.post(`/api/site/articles/${articleId}/add_view`).pipe(map((response) => deserialize(response)));
  }

  addAdvertisingCardView(bannerId) {
    return this.apiClient.post(`/api/site/banner_cards/${bannerId}/add_view`).pipe(map((response) => deserialize(response)));
  }

  addAdvertisingCardClick(bannerId) {
    return this.apiClient.post(`/api/site/banner_cards/${bannerId}/add_click`).pipe(map((response) => deserialize(response)));
  }

  addArticleBannerView(bannerId) {
    return this.apiClient.post(`/api/site/article_banners/${bannerId}/add_view`).pipe(map((response) => deserialize(response)));
  }

  addArticleBannerClick(bannerId) {
    return this.apiClient.post(`/api/site/article_banners/${bannerId}/add_click`).pipe(map((response) => deserialize(response)));
  }

  addTopLineBannerView(bannerId) {
    return this.apiClient.post(`/api/site/topline_banners/${bannerId}/add_view`).pipe(map((response) => deserialize(response)));
  }

  addTopLineBannerClick(bannerId) {
    return this.apiClient.post(`/api/site/topline_banners/${bannerId}/add_click`).pipe(map((response) => deserialize(response)));
  }

  sendTopLineBannerClosingReason(bannerId, reasonId) {
    return this.apiClient.post(`/api/site/topline_banners/${bannerId}/close`, {reason_id: reasonId}).pipe(map((response) => deserialize(response)));
  }

  addVideoView(videoId) {
    return this.apiClient.post(`/api/site/videos/${videoId}/add_view`).pipe(map((response) => deserialize(response)));
  }

  addEmailSubscription(data) {
    return this.apiClient.post(`/api/site/subscribe`, data).pipe(map((response) => deserialize(response)));
  }

  sendNews(data) {
    return this.apiClient.post(`/api/site/send_news`, data).pipe(map((response) => deserialize(response)));
  }

  sendEventRegistration(data) {
    return this.apiClient.post(`/api/site/send_event_registration`, data).pipe(map((response) => deserialize(response)));
  }

  getCompany(companyId): Observable<Company> {
    return this.apiClient.get(`/api/site/companies/${companyId}`).pipe(map((response) => deserialize(response) as Company));
  }

  getSearchResults(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/search`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  getCompanies(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/companies`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  getCompanyActivities(): Observable<any> {
    return this.apiClient.get(`/api/site/company_activities`).pipe(map((response) => deserialize(response)));
  }

  getMenuElements(): Observable<any> {
    return this.apiClient.get(`/api/site/menu`).pipe(map((response) => deserialize(response)));
  }

  getApartmentComplexes(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/apartment_complexes`, {
      params: filter
    }).pipe(map((response) => deserialize(response)));
  }

  getApartmentComplexDetails(apartmentComplexId): Observable<ApartmentComplex> {
    return this.apiClient.get(`/api/site/apartment_complexes/${apartmentComplexId}`).pipe(map((response) => deserialize(response) as ApartmentComplex));
  }

  getServerData(route, screen) {
    return this.apiClient.get(`/api/site/server_data`, {
      params: {
        route,
        screen
      },
      cacheParams: {
        route
      }
    }).pipe(map((response) => deserialize(response)));
  }
}
