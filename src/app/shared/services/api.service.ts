import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApartmentComplex} from '../contracts/apartment-complex';
import {ApiClientService} from './api-client.service';
import {map} from 'rxjs/operators';
import {deserialize} from '../functions/deseriale';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiClient: ApiClientService) {
  }

  getCompanies(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/companies`, {
      params: filter
    }).pipe(map((response) => {
      return deserialize(response);
    }));
  }

  getCompanyActivities(): Observable<any> {
    return this.apiClient.get(`/api/site/company_activities`).pipe(map((response) => {
      return deserialize(response);
    }));
  }

  getMenuElements(): Observable<any> {
    return this.apiClient.get(`/api/site/menu`).pipe(map((response) => {
      return deserialize(response);
    }));
  }

  getApartmentComplexDetails(apartmentComplexId): Observable<{ apartmentComplex: ApartmentComplex }> {
    return this.apiClient.get(`/api/site/apartment_complexes/${apartmentComplexId}`).pipe(map((response) => {
      return deserialize(response) as { apartmentComplex: ApartmentComplex };
    }));
  }

  getServerData(route) {
    return this.apiClient.get(`/api/site/server_data`, {
      params: {
        route
      }
    }).pipe(map((response) => {
      return deserialize(response);
    }));
  }
}
