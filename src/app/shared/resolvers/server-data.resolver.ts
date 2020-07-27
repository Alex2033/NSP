import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {ApiService} from '../services/api.service';
import {catchError, map} from 'rxjs/operators';
import {ResponseService} from '../services/response.service';
import {Location} from '@angular/common';
import {ResponsiveService} from '../services/responsive.service';

@Injectable()
export class ServerDataResolver implements Resolve<any> {
  screen: string;
  constructor(private route: ActivatedRoute, private api: ApiService, private response: ResponseService, private location: Location, private responsive: ResponsiveService) {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let path = this.location.path();
    if (path === '') {
      path = '/';
    }
    if (path[0] === '?') {
      path = '/' + path;
    }
    path = path.replace('/server_data', '');
    return this.api.getServerData(path, this.screen).pipe(
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
        return throwError(err);
      }));
  }
}
