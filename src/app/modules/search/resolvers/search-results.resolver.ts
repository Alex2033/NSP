import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';

@Injectable()
export class SearchResultsResolver implements Resolve<any> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const filter: any = {};
    if (route.params.type) {
      filter.type = route.params.type;
      filter.limit = 12;
    } else {
      filter.limit = 4;
    }
    if (route.queryParams.search) {
      filter.search = route.queryParams.search;
    }

    if (route.queryParams.page) {
      filter.offset = (route.queryParams.page - 1) * 12;
    }

    return this.api.getSearchResults(filter);
  }
}
