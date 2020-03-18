import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApartmentComplex} from '../contracts/apartment-complex';
import {ApiClientService} from './api-client.service';
import {map} from 'rxjs/operators';
import {deserialize} from '../functions/deseriale';
import {Company} from '../contracts/company';
import {Person} from '../contracts/person';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiClient: ApiClientService) {
  }

  getAreas(): Observable<any> {
    return this.apiClient.get(`/api/site/areas`).pipe(map((response) => {
      return deserialize(response);
    }));
  }

  getQuotes(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/quotes`, {
      params: filter
    }).pipe(map((response) => {
      return deserialize(response);
    }));
  }

  getPerson(personId): Observable<Person> {
    return this.apiClient.get(`/api/site/people/${personId}`).pipe(map((response) => {
      return deserialize(response) as Person;
    }));
  }

  getPersons(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/people`, {
      params: filter
    }).pipe(map((response) => {
      return deserialize(response);
    }));
  }

  getCompany(companyId): Observable<Company> {
    return this.apiClient.get(`/api/site/companies/${companyId}`).pipe(map((response) => {
      return deserialize(response) as Company;
    }));
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

  getApartmentComplexes(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/apartment_complexes`, {
      params: filter
    }).pipe(map((response) => {
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
