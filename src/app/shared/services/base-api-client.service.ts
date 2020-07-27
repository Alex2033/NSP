import {HttpClient, HttpHeaders} from '@angular/common/http';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {Observable, of, ReplaySubject, throwError} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';

export abstract class BaseApiClientService {
  protected defaultOptions = {};

  constructor(
    protected http: HttpClient,
    protected state: TransferState,
    protected platformId,
    public apiUrl) {
  }

  getRequestHeaders(type: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, options): Observable<any> {
    return of({});
  }

  private modifyRequest(type: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, options): Observable<any> {
    if (!options) {
      options = {};
    }
    options = {...options, ...this.defaultOptions};
    if (!options.headers) {
      options.headers = new HttpHeaders();
    }
    options.observe = 'response';
    return this.getRequestHeaders(type, url, options).pipe(map((headers) => {
      for (const index in headers) {
        options.headers = options.headers.append(index, headers[index]);
      }
      return options;
    }));
  }

  private makeStateKey(url, options) {
    const optionsClone = {...options};
    if (optionsClone && optionsClone.excludeParamsFromCache) {
      optionsClone.excludeParamsFromCache.forEach(name => {
        delete optionsClone.params[name];
      });
    }
    return makeStateKey(`get-${url}-${optionsClone && optionsClone.params ? JSON.stringify(optionsClone.params) : null}`);
  }

  get(url, options?) {
    const STATE_KEY = this.makeStateKey(url, options);
    if (isPlatformBrowser(this.platformId) && this.state.hasKey(STATE_KEY)) {
      const response = this.state.get(STATE_KEY, null as any);
      this.state.remove(STATE_KEY);
      return of(response);
    }
    return this.modifyRequest('GET', url, options).pipe(mergeMap((modifiedOptions) => {
      return this.http.get(this.apiUrl + url, modifiedOptions).pipe(map((response: any) => {
        this.checkHeaders(response);
        if (isPlatformServer(this.platformId) && options && options.transfer !== false) {
          this.state.set(STATE_KEY, JSON.parse(JSON.stringify(response.body)));
        }
        return response.body;
      }), catchError((err) => {
        this.checkHeaders(err);
        return throwError(err);
      }));
    }));
  }

  post(url, data = {}, options?) {
    data = this.dataToSnakeCase(data);
    return this.modifyRequest('POST', url, options).pipe(mergeMap((modifiedOptions) => {
      return this.http.post(this.apiUrl + url, data, modifiedOptions).pipe(map((response: any) => {
        this.checkHeaders(response);
        return response.body;
      }), catchError((err) => {
        this.checkHeaders(err);
        return throwError(err);
      }));
    }));
  }

  request(type, url, options?) {
    // data = this.dataToSnakeCase(data);
    return this.modifyRequest(type, url, options).pipe(mergeMap((modifiedOptions) => {
      return this.http.request(type, this.apiUrl + url, modifiedOptions).pipe(map((response: any) => {
        this.checkHeaders(response);
        return response.body;
      }), catchError((err) => {
        this.checkHeaders(err);
        return throwError(err);
      }));
    }));
  }

  put(url, data = {}, options?) {
    data = this.dataToSnakeCase(data);
    return this.modifyRequest('PUT', url, options).pipe(mergeMap((modifiedOptions) => {
      return this.http.put(this.apiUrl + url, data, modifiedOptions).pipe(map((response: any) => {
        this.checkHeaders(response);
        return response.body;
      }), catchError((err) => {
        this.checkHeaders(err);
        return throwError(err);
      }));
    }));
  }

  delete(url, options?) {
    return this.modifyRequest('DELETE', url, options).pipe(mergeMap((modifiedOptions) => {
      return this.http.delete(this.apiUrl + url, modifiedOptions).pipe(map((response: any) => {
        this.checkHeaders(response);
        return response.body;
      }), catchError((err) => {
        this.checkHeaders(err);
        return throwError(err);
      }));
    }));
  }

  checkHeaders(response) {
  }

  private toSnakeCase(str) {
    const upperChars = str.match(/([A-Z])/g);
    if (!upperChars) {
      return str;
    }
    for (let i = 0, n = upperChars.length; i < n; i++) {
      str = str.replace(new RegExp(upperChars[i]), '_' + upperChars[i].toLowerCase());
    }

    if (str.slice(0, 1) === '_') {
      str = str.slice(1);
    }
    return str;
  }

  private dataToSnakeCase(data: any) {
    for (const k in data) {
      const snake = this.toSnakeCase(k);
      if (snake !== k) {
        data[this.toSnakeCase(k)] = data[k];
        delete data[k];
      }
    }
    return data;
  }
}
