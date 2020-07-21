import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {ApartmentComplex} from '../../../shared/contracts/apartment-complex';
import {ApiService} from '../../../shared/services/api.service';
import {catchError} from 'rxjs/operators';
import {ResponseService} from '../../../shared/services/response.service';

@Injectable()
export class ApartmentComplexResolver implements Resolve<ApartmentComplex> {
  constructor(private api: ApiService, private router: Router, private response: ResponseService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ApartmentComplex> {
    return this.api.getApartmentComplexDetails(route.params.apartment_complex).pipe(catchError((err) => {
      this.router.navigateByUrl('/server_data/objects/' + route.params.apartment_complex);
      return throwError(err);
    }));
  }
}
