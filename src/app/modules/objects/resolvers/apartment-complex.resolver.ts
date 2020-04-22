import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ApartmentComplex} from '../../../shared/contracts/apartment-complex';
import {ApiService} from '../../../shared/services/api.service';

@Injectable()
export class ApartmentComplexResolver implements Resolve<ApartmentComplex> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ApartmentComplex> {
    return this.api.getApartmentComplexDetails(route.params.apartment_complex);
  }
}
