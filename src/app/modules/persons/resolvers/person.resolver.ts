import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';
import {ApiService} from '../../../shared/services/api.service';
import {Person} from '../../../shared/contracts/person';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(private api: ApiService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    return this.api.getPerson(parseInt(route.params.person_slug, 10)).pipe(catchError((err) => {
      this.router.navigateByUrl('/not-found', {skipLocationChange: true});
      return throwError(err);
    }));
  }
}
