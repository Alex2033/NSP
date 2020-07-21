import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';
import {catchError} from 'rxjs/operators';
import {ResponseService} from '../../../shared/services/response.service';

@Injectable()
export class CompanyResolver implements Resolve<Company> {
  constructor(private api: ApiService, private router: Router, private response: ResponseService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Company> {
    return this.api.getCompany(parseInt(route.params.company_slug, 10)).pipe(catchError((err) => {
      this.router.navigateByUrl('/server_data/companies/' + route.params.company_slug);
      return throwError(err);
    }));
  }
}
