import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApartmentComplex} from '../contracts/apartment-complex';
import {ApiClientService} from './api-client.service';
import {map} from 'rxjs/operators';
import {deserialize} from '../functions/deseriale';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiClient: ApiClientService) { }

  getApartmentComplexDetails(apartmentComplexId): Observable<{apartmentComplex: ApartmentComplex}> {
    return this.apiClient.get(`/api/site/apartment_complexes/${apartmentComplexId}`).pipe(map((response) => {
      return deserialize(response) as {apartmentComplex: ApartmentComplex};
    }));
  }
}
