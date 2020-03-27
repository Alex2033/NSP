import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
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

  getApartmentComplexArticles(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/apartment_complexes/articles`, {
      params: filter
    }).pipe(map((response) => {
      return deserialize(response);
    }));
  }

  getPersonArticles(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/people/articles`, {
      params: filter
    }).pipe(map((response) => {
      return deserialize(response);
    }));
  }

  getCompanyArticles(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/companies/articles`, {
      params: filter
    }).pipe(map((response) => {
      return deserialize(response);
    }));
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

  getSearchResults(filter = {}): Observable<any> {
    return this.apiClient.get(`/api/site/search`, {
      params: filter
    }).pipe(map((response) => {
      return deserialize(response);
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
    return of(
      {
        apartmentComplex: {
          id: 1,
          name: 'ЖК «LIFE-Лесная»',
          previewText: 'Зелёный квартал в тихом районе. Место, рядом с парками и садами, где для спокойной семейной жизни продумана каждая деталь. Квартал располагается в непосредственной близости от исторического центра и Петроградской стороны, в пяти минутах ходьбы от станции метро «Лесная».',
          typeId: 2,
          site: 'https://lesnaya.life',
          descriptionText: 'Текст описания',
          locationText: 'Текст расположения',
          latitude: 59.94138,
          longitude: 30.335681,
          areaName: 'Приморский район',
          imageCollectionXl: [],
          imageCollectionLg: [],
          imageCollectionMd: [],
          imageCollectionSm: [],
          logoXl: 'https://i.ibb.co/QnFV5Ww/image.png',
          logoLg: 'https://i.ibb.co/QnFV5Ww/image.png',
          logoMd: 'https://i.ibb.co/QnFV5Ww/image.png',
          logoSm: 'https://i.ibb.co/QnFV5Ww/image.png',
          imageXl: 'http://admin.nsp.localhost/storage/medialibrary/8/conversions/P_20171020_152035_vHDR_Auto-apartment_complex_image.jpg',
          imageLg: 'http://admin.nsp.localhost/storage/medialibrary/8/conversions/P_20171020_152035_vHDR_Auto-apartment_complex_image.jpg',
          imageMd: 'http://admin.nsp.localhost/storage/medialibrary/8/conversions/P_20171020_152035_vHDR_Auto-apartment_complex_image.jpg',
          imageSm: 'http://admin.nsp.localhost/storage/medialibrary/8/conversions/P_20171020_152035_vHDR_Auto-apartment_complex_image.jpg',
          detailImageXl: 'https://images.unsplash.com/photo-1462774603919-1d8087e62cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
          detailImageLg: 'https://images.unsplash.com/photo-1462774603919-1d8087e62cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
          detailImageMd: 'https://images.unsplash.com/photo-1462774603919-1d8087e62cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
          detailImageSm: 'https://images.unsplash.com/photo-1462774603919-1d8087e62cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80'
        }
      }
    );
    // return this.apiClient.get(`/api/site/apartment_complexes/${apartmentComplexId}`).pipe(map((response) => {
    //   return deserialize(response) as { apartmentComplex: ApartmentComplex };
    // }));
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
