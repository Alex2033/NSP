import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {of, ReplaySubject, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {isPlatformBrowser} from '@angular/common';
import {CookieService} from 'ngx-cookie-service';
import {BaseApiClientService} from './base-api-client.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService extends BaseApiClientService {
  defaultOptions = {
    withCredentials: true
  };
  constructor(
    protected http: HttpClient,
    protected state: TransferState,
    private cookie: CookieService,
    @Inject(PLATFORM_ID) protected platformId) {
    super(http, state, platformId, environment.apiHost);
  }

  getRequestHeaders(type: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, options) {
    const headers: any = {};
    if (type !== 'GET') {
      headers['X-XSRF-TOKEN'] = this.cookie.get('XSRF-TOKEN');
      if (!headers['X-XSRF-TOKEN']) {
        return this.get('/sanctum/csrf-cookie').pipe(map(() => {
          headers['X-XSRF-TOKEN'] = this.cookie.get('XSRF-TOKEN');
          return headers;
        }));
      }
    }
    return of(headers);
  }
}
