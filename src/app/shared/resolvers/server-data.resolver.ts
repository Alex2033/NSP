import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ApiService} from '../services/api.service';
import {catchError, map} from 'rxjs/operators';
import {ResponseService} from '../services/response.service';
import {Location} from '@angular/common';

@Injectable()
export class ServerDataResolver implements Resolve<any> {
  constructor(private route: ActivatedRoute, private api: ApiService, private response: ResponseService, private location: Location, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let path = this.location.path();
    if (path === '') {
      path = '/';
    }
    return this.api.getServerData(path).pipe(
      map(
        (response: any) => {
          if (response.type === 'redirect') {
            this.response.permanentRedirect(response.location);
          }
          return response;
        }
      ),
      catchError((err) => {
        if (err.status === 404) {
          this.response.notFound();
          this.location.replaceState(path); // Иначе в строке браузера не изменится адрес, т.к. перехода к новой странице не произошло
        }
        return err;
      }));
  }
}
