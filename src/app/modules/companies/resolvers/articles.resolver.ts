import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';
import {ArticleCard} from '../../../shared/contracts/article-card';

@Injectable()
export class ArticlesResolver implements Resolve<ListResponse<ArticleCard>> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ListResponse<ArticleCard>> {
    const filter: any = {};
    if (route.params.company_slug) {
      filter.company_id = parseInt(route.params.company_slug, 10);
      filter.limit = 999;
    } else {
      filter.limit = 12;
    }

    // if (route.queryParams.page) {
    //   filter.offset = (route.queryParams.page - 1) * 12;
    // }


    return this.api.getCompanyArticles(filter);
  }
}
