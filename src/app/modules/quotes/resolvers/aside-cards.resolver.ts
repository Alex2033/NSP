import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';
import {Person} from '../../../shared/contracts/person';
import {Quote} from '../../../shared/contracts/quote';
import {map} from 'rxjs/operators';

@Injectable()
export class AsideCardsResolver implements Resolve<any> {
  response;

  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (!this.response) {
      return this.api.getQuoteAsideCards().pipe(map((response) => {
        this.response = response;
        return this.response;
      }));
    } else {
      return of(this.response);
    }
  }
}
