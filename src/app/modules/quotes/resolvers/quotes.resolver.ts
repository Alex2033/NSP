import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';
import {Person} from '../../../shared/contracts/person';
import {Quote} from '../../../shared/contracts/quote';

@Injectable()
export class QuotesResolver implements Resolve<ListResponse<Quote>> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ListResponse<Quote>> {
    const filter: any = {};
    if (route.queryParams.search) {
      filter.search = route.queryParams.search;
    }

    if (route.queryParams.page) {
      filter.offset = (route.queryParams.page - 1) * 12;
    }
    filter.limit = 12;

    return this.api.getQuotes(filter);
  }
}
