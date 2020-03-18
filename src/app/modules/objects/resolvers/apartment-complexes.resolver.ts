import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';
import {ApartmentComplex} from '../../../shared/contracts/apartment-complex';

@Injectable()
export class ApartmentComplexesResolver implements Resolve<ListResponse<ApartmentComplex>> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ListResponse<ApartmentComplex>> {
    const filter: any = {};
    if (route.queryParams.type_id) {
      filter.type_id = route.queryParams.type_id;
    }
    if (route.queryParams.area_id) {
      filter.area_id = route.queryParams.area_id;
    }
    if (route.queryParams.search) {
      filter.search = route.queryParams.search;
    }

    if (route.queryParams.page) {
      filter.offset = (route.queryParams.page - 1) * 12;
    }
    filter.limit = 12;

    return this.api.getApartmentComplexes(filter);
  }
}
