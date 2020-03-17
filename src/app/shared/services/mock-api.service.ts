import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';
import {Observable, of} from 'rxjs';
import {ApartmentComplex} from '../contracts/apartment-complex';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor(private apiClient: ApiClientService) {
  }

  getServerData(route) {
    return of();
  }

  getCompanies(filter = {}) {
    return of(
      {
        count: 4,
        items: [
          {
            id: 1,
            name: 'БестЪ. Коммерческая недвижимость',
            slug: 'best',
            activityName: 'Агентство недвижимости',
            phone: '+7 (812) 380–03–55',
            site: 'http://bestgroup.ru',
            logoXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
          },
          {
            id: 2,
            name: 'Комплекс апарт-отелей VALO',
            slug: 'valo',
            activityName: 'Агентство недвижимости',
            phone: '+7 (812) 411–00–00',
            site: 'http://valoapart.ru',
            logoXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
          },
          {
            id: 3,
            name: 'ООО ИСК Отделстрой',
            slug: 'ooo',
            activityName: 'Экспертиза',
            phone: '+7 (812) 596-59-70',
            site: 'http://otdelstroy.spb.ru',
            logoXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
          },
          {
            id: 4,
            name: 'Группа ЦДС',
            slug: 'cds',
            activityName: 'Строительные материалы/технологии',
            phone: '+7 (812) 320–12–00',
            site: 'http://cds.spb.ru',
            logoXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            logoSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
          }
        ]
      }
    );
  }

  getCompanyActivities() {
    return of({
      count: 4,
      items: [
        {
          id: 1,
          name: 'Строительство'
        },
        {
          id: 2,
          name: 'Агенство недвижимости'
        },
        {
          id: 3,
          name: 'Управление недвижимостью'
        },
        {
          id: 4,
          name: 'Банковские услуги'
        }
      ]
    });
  }

  getMenuElements() {
    return of(
      {
        elements: [
          {
            name: 'Search',
            slug: 'search',
            highlight: false
          },
          {
            name: 'Companies index',
            slug: 'companies',
            highlight: false
          },
          {
            name: 'Companies detail',
            slug: 'companies/1-slug',
            highlight: false
          },
          {
            name: 'Article',
            slug: 'article',
            highlight: false
          },
          {
            name: 'Quotes',
            slug: 'quotes',
            highlight: false
          },
          {
            name: 'Persons index',
            slug: 'persons',
            highlight: false
          },
          {
            name: 'Persons detail',
            slug: 'persons/detail',
            highlight: false
          },
          {
            name: 'Event',
            slug: 'event',
            highlight: false
          },
          {
            name: 'Objects index',
            slug: 'objects',
            highlight: false
          },
          {
            name: 'Objects detail',
            slug: 'objects/detail',
            highlight: false
          },
          {
            name: 'Sections detail',
            slug: 'sections/detail',
            highlight: false
          },
          {
            name: 'Projects detail',
            slug: 'projects/detail',
            highlight: false
          },
        ]
      }
    );
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
  }
}
