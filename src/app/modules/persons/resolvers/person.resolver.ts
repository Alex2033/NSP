import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse} from '../../../shared/contracts/list-response';
import {Company} from '../../../shared/contracts/company';
import {ApiService} from '../../../shared/services/api.service';
import {Person} from '../../../shared/contracts/person';

@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(private api: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    return this.api.getPerson(parseInt(route.params.person_slug, 10));
  }
}
