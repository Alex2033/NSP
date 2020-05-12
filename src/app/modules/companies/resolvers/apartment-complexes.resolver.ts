import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';
import {ArticleCard} from '../../../shared/contracts/article-card';

@Injectable()
export class ApartmentComplexesResolver implements Resolve<ListResponse<ArticleCard>> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ListResponse<ArticleCard>> {
    return this.api.getCompanyApartmentComplexes(parseInt(route.params.company_slug, 10));
  }
}
