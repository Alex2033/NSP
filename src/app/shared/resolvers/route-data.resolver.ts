import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable()
export class RouteDataResolver implements Resolve<any> {
  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.router.getCurrentNavigation().extras.state.data.data;
  }
}
