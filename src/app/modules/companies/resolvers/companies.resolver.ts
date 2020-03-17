import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';

@Injectable()
export class CompaniesResolver implements Resolve<ListResponse<Company>> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ListResponse<Company>> {
    const filter: any = {};
    if (route.params.activity_id) {
      filter.activity_id = route.params.activity_id;
    }
    if (route.queryParams.search) {
      filter.search = route.queryParams.search;
    }

    return this.api.getCompanies(filter);
  }
}
