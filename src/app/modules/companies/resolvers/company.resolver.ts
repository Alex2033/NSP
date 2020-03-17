import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';

@Injectable()
export class CompanyResolver implements Resolve<Company> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Company> {
    return this.api.getCompany(parseInt(route.params.company_slug, 10));
  }
}
