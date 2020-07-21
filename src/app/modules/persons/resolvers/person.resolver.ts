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
    return this.api.getPerson(route.params.person_slug).pipe(catchError((err) => {
      this.router.navigateByUrl('/server_data/persons/' + route.params.person_slug);
      return throwError(err);
    }));
  }
}
