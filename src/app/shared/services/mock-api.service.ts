import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';
import {Observable, of} from 'rxjs';
import {ApartmentComplex} from '../contracts/apartment-complex';
import {ResponseService} from './response.service';
import {Page} from '../contracts/page';
import {Project} from '../contracts/project';
import {Section} from '../contracts/section';
import {Article} from '../contracts/article';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor(private apiClient: ApiClientService, private response: ResponseService) {
  }

  getApartmentComplexArticles(filter = {}) {
    return of(
      {
        count: 4,
        items: [
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          }
        ]
      }
    );
  }

  getPersonArticles(filter = {}) {
    return of(
      {
        count: 4,
        items: [
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          }
        ]
      }
    );
  }
  getCompanyApartmentComplexes(companyId) {
    return of(
      {count: 0, items: []}
    );
  }
  getCompanyArticles(filter = {}) {
    return of(
      {
        count: 4,
        items: [
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          },
          {
            type: 'article',
            size: 'small',
            articlePublishedAt: 1584608518,
            markerName: '💥 Свежее',
            title: 'Долги под апартами',
            previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
            view: 'half',
            articleViewsCount: 12453,
            articleId: 123,
            articleSlug: 'article-slug',
            imageXl: 'https://picsum.photos/304/152',
            imageLg: 'https://picsum.photos/304/152',
            imageMd: 'https://picsum.photos/304/152',
            imageSm: 'https://picsum.photos/304/152',
          }
        ]
      }
    );
  }

  getSearchResults(filter = {}) {
    return of(
      {
        articles: {
          count: 15,
          items: [
            {
              type: 'article',
              size: 'small',
              articlePublishedAt: 1584608518,
              markerName: '💥 Свежее',
              title: 'Долги под апартами',
              previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
              view: 'half',
              articleViewsCount: 12453,
              articleId: 123,
              articleSlug: 'article-slug',
              imageXl: 'https://picsum.photos/304/152',
              imageLg: 'https://picsum.photos/304/152',
              imageMd: 'https://picsum.photos/304/152',
              imageSm: 'https://picsum.photos/304/152',
            },
            {
              type: 'article',
              size: 'small',
              articlePublishedAt: 1584608518,
              markerName: '💥 Свежее',
              title: 'Долги под апартами',
              previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
              view: 'half',
              articleViewsCount: 12453,
              articleId: 123,
              articleSlug: 'article-slug',
              imageXl: 'https://picsum.photos/304/152',
              imageLg: 'https://picsum.photos/304/152',
              imageMd: 'https://picsum.photos/304/152',
              imageSm: 'https://picsum.photos/304/152',
            },
            {
              type: 'article',
              size: 'small',
              articlePublishedAt: 1584608518,
              markerName: '💥 Свежее',
              title: 'Долги под апартами',
              previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
              view: 'half',
              articleViewsCount: 12453,
              articleId: 123,
              articleSlug: 'article-slug',
              imageXl: 'https://picsum.photos/304/152',
              imageLg: 'https://picsum.photos/304/152',
              imageMd: 'https://picsum.photos/304/152',
              imageSm: 'https://picsum.photos/304/152',
            },
            {
              type: 'article',
              size: 'small',
              articlePublishedAt: 1584608518,
              markerName: '💥 Свежее',
              title: 'Долги под апартами',
              previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
              view: 'half',
              articleViewsCount: 12453,
              articleId: 123,
              articleSlug: 'article-slug',
              imageXl: 'https://picsum.photos/304/152',
              imageLg: 'https://picsum.photos/304/152',
              imageMd: 'https://picsum.photos/304/152',
              imageSm: 'https://picsum.photos/304/152',
            }
          ]
        },
        companies: {
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
        },
        persons: {
          count: 4,
          items: [
            {
              photoXl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoLg: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoMd: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoSm: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              firstName: 'Глебова',
              middleName: 'Елена',
              lastName: 'Александровна',
              companyName: 'БестЪ. Коммерческая недвижимость»',
              position: 'Руководитель отдела продаж'
            },
            {
              photoXl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoLg: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoMd: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoSm: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              firstName: 'Демешенков',
              middleName: 'Вадим',
              lastName: 'Николаевич',
              companyName: 'БестЪ. Коммерческая недвижимость»',
              position: 'Руководитель отдела офисной недвижимости'
            },
            {
              photoXl: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoLg: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoMd: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoSm: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              firstName: 'Лушников',
              middleName: 'Андрей',
              lastName: 'Владимирович',
              companyName: 'БестЪ. Коммерческая недвижимость»',
              position: 'председатель Совета директоров'
            },
            {
              photoXl: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoLg: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoMd: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              photoSm: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              firstName: 'Свояволя',
              middleName: 'Ян',
              lastName: '',
              companyName: 'ООО «Главстрой-СПб»',
              position: 'Директор по маркетингу'
            }
          ]
        },
        objects: {
          count: 5,
          items: [
            {
              id: 1,
              name: 'ЖК «Новое купчино»',
              areaName: 'Василеостровский район',
              imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            },
            {
              id: 2,
              name: 'ЖК «Новый Лесснер»',
              areaName: 'Московский район',
              imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            },
            {
              id: 3,
              name: 'ЖК «LIFE-Лесная»',
              areaName: 'Выборгский район',
              imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            },
            {
              id: 4,
              name: 'ЖК «Новый Лесснер»',
              areaName: 'Московский район',
              imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            }
          ]
        }
      }
    );
  }

  getNextArticle(articleId, exclude) {
    return this.getServerData('/event').pipe(map((data) => {
      return data.data;
    }));
  }

  addEmailSubscription(data) {
    return of();
  }

  sendNews(data) {
    return of();
  }

  getArticleBanner(articleId) {
    return of(
      {
        id: 1,
        type: 'image',
        url: 'http://google.ru',
        images: {
          xl: 'https://wallpapercart.com/wp-content/uploads/2019/08/Full-HD-Nature-Images.jpg',
          lg: 'https://wallpapercart.com/wp-content/uploads/2019/08/Full-HD-Nature-Images.jpg',
          md: 'https://wallpapercart.com/wp-content/uploads/2019/08/Full-HD-Nature-Images.jpg',
          sm: 'https://wallpapercart.com/wp-content/uploads/2019/08/Full-HD-Nature-Images.jpg',
        }
      }
    );
  }

  getTopLineBanner(pageType, pageId) {
    return of(
      {
        id: 1,
        type: 'image',
        url: 'http://google.ru',
        images: {
          xl: 'https://wallpapercart.com/wp-content/uploads/2019/08/Full-HD-Nature-Images.jpg',
          lg: 'https://wallpapercart.com/wp-content/uploads/2019/08/Full-HD-Nature-Images.jpg',
          md: 'https://wallpapercart.com/wp-content/uploads/2019/08/Full-HD-Nature-Images.jpg',
          sm: 'https://wallpapercart.com/wp-content/uploads/2019/08/Full-HD-Nature-Images.jpg',
        }
      }
    );
  }

  sendEventRegistration(data) {
    return of();
  }

  getAdvertisementClosingReasons(data) {
    return of(
      {
        reasons: [
          {
            id: 1,
            name: 'Раздражает реклама'
          },
          {
            id: 2,
            name: 'Уже купил'
          }
        ]
      }
    );
  }

  addArticleView(articleId) {
    return of();
  }

  addAdvertisingCardView(bannerId) {
    return of();
  }

  addAdvertisingCardClick(bannerId) {
    return of();
  }

  addArticleBannerView(bannerId) {
    return of();
  }

  addArticleBannerClick(bannerId) {
    return of();
  }

  addTopLineBannerView(bannerId) {
    return of();
  }

  addTopLineBannerClick(bannerId) {
    return of();
  }

  sendTopLineBannerClosingReason(bannerId, reasonId) {
    return of();
  }

  addVideoView(videoId) {
    return of();
  }

  getHeaderQuote() {
    return of(
      {
        text: 'По статистике, к псевдожилью в Петербурге можно отнести около шестидесяти процентов строящихся комплексов. Нужно быть внимательным при выборе объекта для вложений',
        publishedAt: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
        sourceName: 'Название источника статьи',
        author: {
          photoXl: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
          photoLg: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
          photoMd: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
          photoSm: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
          firstName: 'Марина',
          lastName: 'Сторожевая',
          position: 'Директор по развитию, партнер М2Маркет '
        }
      }
    );
  }

  getQuoteAsideCards() {
    return of({
      cards: [
        {
          type: 'article-list',
          size: 'small',
          highlight: true,
          title: 'А вы это читали?',
          articles: [
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483,
              title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
              previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 5),
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
              previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 15),
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
              previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 35),
              title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
              previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 55),
              title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
              previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
            },
            {
              id: 1,
              slug: '',
              publishedAt: 1573746483 - (60 * 125),
              title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
              previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
            }
          ],
        }
      ]
    });
  }

  getServerData(route): Observable<{ type: 'page', data: Page } | { type: 'project', data: Project } | { type: 'section', data: Section } | { type: 'article', data: Article }> {
    if (route === '/project' || route === '/') {
      return of(
        {
          type: 'project',
          data: {
            title: 'Жилые комплексы',
            slug: route === '/' ? '' : 'project',
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
            layout: {
              xl: [
                {
                  type: 'front-article',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/616/304',
                  imageLg: 'https://picsum.photos/616/304',
                  imageMd: 'https://picsum.photos/616/304',
                  imageSm: 'https://picsum.photos/616/616',
                  smallImageSm: null,
                },
                {
                  type: 'slider'
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'half',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/304/152',
                  imageLg: 'https://picsum.photos/304/152',
                  imageMd: 'https://picsum.photos/304/152',
                  imageSm: 'https://picsum.photos/304/152',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'article-list',
                  size: 'small',
                  highlight: true,
                  title: 'А вы это читали?',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    }
                  ],
                },
                {
                  type: 'latest-news',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      highlight: true,
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    }
                  ],
                  position: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  type: 'article',
                  size: 'medium-horizontal',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'half',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/304/304',
                  imageLg: 'https://picsum.photos/304/304',
                  imageMd: 'https://picsum.photos/304/304',
                  imageSm: 'https://picsum.photos/304/304',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'half',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/304/152',
                  imageLg: 'https://picsum.photos/304/152',
                  imageMd: 'https://picsum.photos/304/152',
                  imageSm: 'https://picsum.photos/304/152',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'advertising',
                  size: 'small'
                },
                {
                  type: 'video',
                  size: 'medium-horizontal',
                  videoPublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  videoViewsCount: 12453,
                  imageXl: 'https://picsum.photos/616/304',
                  imageLg: 'https://picsum.photos/616/304',
                  imageMd: 'https://picsum.photos/616/304',
                  imageSm: 'https://picsum.photos/616/304',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                  videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
                },
                {
                  type: 'article-list',
                  size: 'medium-horizontal',
                  title: 'А вы это читали?',
                  highlight: false,
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    }
                  ],
                  position: {
                    x: 3,
                    y: 3
                  }
                },
                {
                  type: 'article',
                  size: 'medium-horizontal',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                }
              ],
              lg: [
                {
                  type: 'front-article',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/616/304',
                  imageLg: 'https://picsum.photos/616/304',
                  imageMd: 'https://picsum.photos/616/304',
                  imageSm: 'https://picsum.photos/616/616',
                  smallImageSm: null,
                },
                {
                  type: 'slider'
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'article-list',
                  size: 'small',
                  highlight: true,
                  title: 'А вы это читали?',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    }
                  ],
                  position: {
                    x: 3,
                    y: 1
                  }
                },
                {
                  type: 'latest-news',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      highlight: true,
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    }
                  ],
                  position: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'advertising',
                  size: 'small'
                },
                {
                  type: 'video',
                  size: 'medium-horizontal',
                  videoPublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  videoViewsCount: 12453,
                  imageXl: 'https://picsum.photos/616/304',
                  imageLg: 'https://picsum.photos/616/304',
                  imageMd: 'https://picsum.photos/616/304',
                  imageSm: 'https://picsum.photos/616/304',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                  videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
                },
                {
                  type: 'article-list',
                  size: 'medium-vertical',
                  highlight: true,
                  title: 'А вы это читали?',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    }
                  ],
                  position: {
                    x: 3,
                    y: 2
                  }
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'half',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
              ],
              md: [
                {
                  type: 'front-article',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/616/304',
                  imageLg: 'https://picsum.photos/616/304',
                  imageMd: 'https://picsum.photos/616/304',
                  imageSm: 'https://picsum.photos/616/616',
                  smallImageSm: null,
                },
                {
                  type: 'slider'
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'article-list',
                  size: 'small',
                  title: 'А вы это читали?',
                  highlight: false,
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    }
                  ],
                  position: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  type: 'latest-news',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      highlight: true,
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    }
                  ],
                  position: {
                    x: 1,
                    y: 4
                  }
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'advertising',
                  size: 'small'
                },
                {
                  type: 'video',
                  size: 'medium-horizontal',
                  videoPublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  videoViewsCount: 12453,
                  imageXl: 'https://picsum.photos/616/304',
                  imageLg: 'https://picsum.photos/616/304',
                  imageMd: 'https://picsum.photos/616/304',
                  imageSm: 'https://picsum.photos/616/304',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                  videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
                },
                {
                  type: 'article-list',
                  size: 'medium-vertical',
                  highlight: true,
                  title: 'А вы это читали?',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    }
                  ],
                  position: {
                    x: 2,
                    y: 6
                  }
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
              ],
              sm: [
                {
                  type: 'slider'
                },
                {
                  type: 'article-list',
                  size: 'small',
                  title: 'А вы это читали?',
                  highlight: false,
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    }
                  ],
                  position: {
                    x: 1,
                    y: 5
                  }
                },
                {
                  type: 'latest-news',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      highlight: true,
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия'
                    }
                  ],
                  position: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
                {
                  type: 'video',
                  size: 'small',
                  videoPublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  videoViewsCount: 12453,
                  imageXl: 'https://picsum.photos/616/304',
                  imageLg: 'https://picsum.photos/616/304',
                  imageMd: 'https://picsum.photos/616/304',
                  imageSm: 'https://picsum.photos/616/304',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                  videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
                },
                {
                  type: 'article-list',
                  size: 'small',
                  highlight: true,
                  title: 'А вы это читали?',
                  articles: [
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483,
                      title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 5),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 15),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 35),
                      title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 55),
                      title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    },
                    {
                      id: 1,
                      slug: '',
                      publishedAt: 1573746483 - (60 * 125),
                      title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                      previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                    }
                  ],
                  position: {
                    x: 1,
                    y: 6
                  }
                },
                {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                }, {
                  type: 'article',
                  size: 'small',
                  articlePublishedAt: 1584608518,
                  markerName: '💥 Свежее',
                  title: 'Долги под апартами',
                  previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                  view: 'full',
                  articleViewsCount: 12453,
                  articleId: 123,
                  articleSlug: 'article-slug',
                  imageXl: 'https://picsum.photos/618/618',
                  imageLg: 'https://picsum.photos/618/618',
                  imageMd: 'https://picsum.photos/618/618',
                  imageSm: 'https://picsum.photos/618/618',
                  smallImageXl: null,
                  smallImageLg: null,
                  smallImageMd: null,
                  smallImageSm: null,
                },
              ],
            },
            newsBlocks: [
              {
                title: 'Новости долёвки',
                articles: [
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483,
                    title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 5),
                    title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 15),
                    title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 35),
                    title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 55),
                    title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 125),
                    title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                  }
                ]
              }
            ],
            collections: [
              {
                id: 1,
                title: 'Технологии строительства',
                slug: 'tech-stroitelstva',
                links: [
                  {
                    link: 'http://vk.com',
                    title: 'Ссылка 1',
                  },
                  {
                    link: 'http://vk.com',
                    title: 'Ссылка 2',
                  },
                  {
                    link: 'http://vk.com',
                    title: 'Ссылка 3',
                  },
                  {
                    link: 'http://vk.com',
                    title: 'Ссылка 4',
                  }
                ],
                cards: [
                  {
                    type: 'article',
                    size: 'small',
                    articlePublishedAt: 1584608518,
                    markerName: '💥 Свежее',
                    title: 'Долги под апартами',
                    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                    view: 'half',
                    articleViewsCount: 12453,
                    articleId: 123,
                    articleSlug: 'article-slug',
                    imageXl: 'https://picsum.photos/304/152',
                    imageLg: 'https://picsum.photos/304/152',
                    imageMd: 'https://picsum.photos/304/152',
                    imageSm: 'https://picsum.photos/304/152',
                  },
                  {
                    type: 'article',
                    size: 'small',
                    articlePublishedAt: 1584608518,
                    markerName: '💥 Свежее',
                    title: 'Долги под апартами',
                    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                    view: 'half',
                    articleViewsCount: 12453,
                    articleId: 123,
                    articleSlug: 'article-slug',
                    imageXl: 'https://picsum.photos/304/152',
                    imageLg: 'https://picsum.photos/304/152',
                    imageMd: 'https://picsum.photos/304/152',
                    imageSm: 'https://picsum.photos/304/152',
                  },
                  {
                    type: 'article',
                    size: 'small',
                    articlePublishedAt: 1584608518,
                    markerName: '💥 Свежее',
                    title: 'Долги под апартами',
                    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                    view: 'half',
                    articleViewsCount: 12453,
                    articleId: 123,
                    articleSlug: 'article-slug',
                    imageXl: 'https://picsum.photos/304/152',
                    imageLg: 'https://picsum.photos/304/152',
                    imageMd: 'https://picsum.photos/304/152',
                    imageSm: 'https://picsum.photos/304/152',
                  },
                  {
                    type: 'article',
                    size: 'small',
                    articlePublishedAt: 1584608518,
                    markerName: '💥 Свежее',
                    title: 'Долги под апартами',
                    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                    view: 'half',
                    articleViewsCount: 12453,
                    articleId: 123,
                    articleSlug: 'article-slug',
                    imageXl: 'https://picsum.photos/304/152',
                    imageLg: 'https://picsum.photos/304/152',
                    imageMd: 'https://picsum.photos/304/152',
                    imageSm: 'https://picsum.photos/304/152',
                  },
                  {
                    type: 'article',
                    size: 'small',
                    articlePublishedAt: 1584608518,
                    markerName: '💥 Свежее',
                    title: 'Долги под апартами',
                    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                    view: 'half',
                    articleViewsCount: 12453,
                    articleId: 123,
                    articleSlug: 'article-slug',
                    imageXl: 'https://picsum.photos/304/152',
                    imageLg: 'https://picsum.photos/304/152',
                    imageMd: 'https://picsum.photos/304/152',
                    imageSm: 'https://picsum.photos/304/152',
                  },
                  {
                    type: 'article',
                    size: 'small',
                    articlePublishedAt: 1584608518,
                    markerName: '💥 Свежее',
                    title: 'Долги под апартами',
                    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                    view: 'half',
                    articleViewsCount: 12453,
                    articleId: 123,
                    articleSlug: 'article-slug',
                    imageXl: 'https://picsum.photos/304/152',
                    imageLg: 'https://picsum.photos/304/152',
                    imageMd: 'https://picsum.photos/304/152',
                    imageSm: 'https://picsum.photos/304/152',
                  },
                  {
                    type: 'article',
                    size: 'small',
                    articlePublishedAt: 1584608518,
                    markerName: '💥 Свежее',
                    title: 'Долги под апартами',
                    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                    view: 'half',
                    articleViewsCount: 12453,
                    articleId: 123,
                    articleSlug: 'article-slug',
                    imageXl: 'https://picsum.photos/304/152',
                    imageLg: 'https://picsum.photos/304/152',
                    imageMd: 'https://picsum.photos/304/152',
                    imageSm: 'https://picsum.photos/304/152',
                  },
                  {
                    type: 'article',
                    size: 'small',
                    articlePublishedAt: 1584608518,
                    markerName: '💥 Свежее',
                    title: 'Долги под апартами',
                    previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
                    view: 'half',
                    articleViewsCount: 12453,
                    articleId: 123,
                    articleSlug: 'article-slug',
                    imageXl: 'https://picsum.photos/304/152',
                    imageLg: 'https://picsum.photos/304/152',
                    imageMd: 'https://picsum.photos/304/152',
                    imageSm: 'https://picsum.photos/304/152',
                  }
                ]
              }
            ]
          },
          menu: [
            {
              name: 'Подобрать ЖК',
              slug: '',
              highlight: true
            },
            {
              name: 'Технология строительства',
              slug: '',
              highlight: false
            },
            {
              name: 'Новости',
              slug: '',
              highlight: false
            },
            {
              name: 'Интервью',
              slug: '',
              highlight: false
            },
            {
              name: 'Аналитика',
              slug: '',
              highlight: false
            }
          ]
        }
      );
    }
    if (route === '/section') {
      let cards = [
        {
          type: 'article',
          size: 'small',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'half',
          articleViewsCount: 12453,
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/304/152',
          imageLg: 'https://picsum.photos/304/152',
          imageMd: 'https://picsum.photos/304/152',
          imageSm: 'https://picsum.photos/304/152',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
        },
        {
          type: 'article',
          size: 'small',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'full',
          articleViewsCount: 12453,
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/304/304',
          imageLg: 'https://picsum.photos/304/304',
          imageMd: 'https://picsum.photos/304/304',
          imageSm: 'https://picsum.photos/304/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
        },
        {
          type: 'video',
          size: 'small',
          videoPublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          videoViewsCount: 12453,
          imageXl: 'https://picsum.photos/616/304',
          imageLg: 'https://picsum.photos/616/304',
          imageMd: 'https://picsum.photos/616/304',
          imageSm: 'https://picsum.photos/616/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
          videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
        }
      ];
      let i = 0;
      while (i < 4) {
        cards = cards.concat(cards);
        i++;
      }

      return of(
        {
          type: 'section',
          data: {
            id: 1,
            title: 'Власть',
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
            cardsCount: 100,
            tags: [
              {
                name: 'Тег 1',
                code: 'tag1'
              },
              {
                name: 'Тег 2',
                code: 'tag1'
              },
              {
                name: 'Тег 3',
                code: 'tag1'
              },
              {
                name: 'Тег 4',
                code: 'tag1'
              },
              {
                name: 'Тег 5',
                code: 'tag1'
              }
            ],
            cardsFilter: {
              section_id: 1
            },
            cards: cards
          }
        }
      );
    }
    if (route === '/article' || route === '/event') {
      let cards = [
        {
          type: 'article',
          size: 'small',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'half',
          articleViewsCount: 12453,
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/304/152',
          imageLg: 'https://picsum.photos/304/152',
          imageMd: 'https://picsum.photos/304/152',
          imageSm: 'https://picsum.photos/304/152',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
        },
        {
          type: 'article',
          size: 'small',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'full',
          articleViewsCount: 12453,
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/304/304',
          imageLg: 'https://picsum.photos/304/304',
          imageMd: 'https://picsum.photos/304/304',
          imageSm: 'https://picsum.photos/304/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
        },
        {
          type: 'article',
          size: 'medium-horizontal',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'half',
          articleViewsCount: 12453,
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/304/152',
          imageLg: 'https://picsum.photos/304/152',
          imageMd: 'https://picsum.photos/304/152',
          imageSm: 'https://picsum.photos/304/152',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
        },
        {
          type: 'article',
          size: 'small',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'full',
          articleViewsCount: 12453,
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/304/304',
          imageLg: 'https://picsum.photos/304/304',
          imageMd: 'https://picsum.photos/304/304',
          imageSm: 'https://picsum.photos/304/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
        },
        {
          type: 'article',
          size: 'medium-horizontal',
          articlePublishedAt: 1584608518,
          markerName: '💥 Свежее',
          title: 'Долги под апартами',
          previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
          view: 'full',
          articleViewsCount: 12453,
          articleId: 123,
          articleSlug: 'article-slug',
          imageXl: 'https://picsum.photos/304/304',
          imageLg: 'https://picsum.photos/304/304',
          imageMd: 'https://picsum.photos/304/304',
          imageSm: 'https://picsum.photos/304/304',
          smallImageXl: null,
          smallImageLg: null,
          smallImageMd: null,
          smallImageSm: null,
        },
      ];
      return of(
        {
          type: 'article',
          data: {
            id: route === '/article' ? 1 : 2,
            title: route === '/article' ? 'ВТБ играет на опережение' : 'Новогодний саммит РГУД',
            slug: 'apartamenti-na-pauze',
            metaTitle: null,
            metaDescription: null,
            metaKeywords: null,
            authors: [
              {
                id: 1,
                slug: 'person_slug',
                name: 'Иванов Петр'
              },
              {
                id: 2,
                slug: 'person_slug',
                name: 'Гончаров Иван'
              }
            ],
            publishedAt: 1584608518,
            viewsCount: 5429,
            previewText: 'Банк ВТБ начинает приём заявок по новой ипотечной госпрограмме субсидирования со ставкой 6,5% годовых.',
            commentsCount: 5,
            commentsAllowed: true,
            content: [
              {
                type: 'image',
                data: {
                  text: null,
                  imageXl: 'https://nsp.ru/files/newsImages/e6/a0/35733_big.jpg',
                  imageLg: 'https://nsp.ru/files/newsImages/e6/a0/35733_big.jpg',
                  imageMd: 'https://nsp.ru/files/newsImages/e6/a0/35733_big.jpg',
                  imageSm: 'https://nsp.ru/files/newsImages/e6/a0/35733_big.jpg',
                  imageTitle: null,
                  imageAlt: null
                },
                size: 'float-left'
              },
              {
                type: 'text',
                data:
                  '<p>Размер первоначального взноса – не менее 20% от стоимости новостройки. <a href="/news/25245-ipoteka-pod-6" target="_blank">Речь идёт о льготной ипотеке</a>, которую вчера предложил президент Владимир Путин. Лимит для регионов – до 3,5 млн рублей, для Москвы и Петербурга – до 8 млн рублей.</p>\n' +
                  '\n' +
                  '<p>«Сразу после заявления президента ВТБ начал работу над запуском новой программы, – сообщил Анатолий Печатников, заместитель председателя правления банка. – Цель – обеспечить доступность льготной ипотеки&nbsp;в&nbsp;максимально сжатые сроки. Мы первыми начинаем принимать заявки и рассчитываем выдать первый кредит под 6,5% уже в&nbsp;понедельник, 20&nbsp;апреля, не&nbsp;дожидаясь утверждения постановления правительства».</p>\n' +
                  '\n' +
                  '<p>ВТБ, безусловно, делает рискованный шаг. Президент заявил о том, что льготная ипотека будет выдаваться не вообще всем подряд, а на жильё комфорт-класса. А в законодательстве&nbsp;такого определения нет. Зато банк соберёт заявки тех, кто подаёт их «на эмоциях», впечатлившись выступлением президента.&nbsp;</p>\n' +
                  '\n' +
                  '<p>Ещё интересный вопрос: будет ли в кредитном договоре с ВТБ оговорка о неподаче заявления о кредитных каникулах? А то искушение велико: взять недорого и не платить полгода...&nbsp;&nbsp;</p>\n' +
                  '\n' +
                  '<p>По&nbsp;итогам первого квартала портфель ВТБ в&nbsp;сегменте жилищных кредитов вырос на&nbsp;3,5% – до&nbsp;1,74 трлн рублей. Банк выдаёт каждую четвёртую ипотеку в&nbsp;стране.</p>\n' +
                  '\n' +
                  '<p>По оптимистичным оценкам «ДОМ.РФ», в рамках специальной ипотеки по ставке 6,5% в течение 2020 года будет выдано не менее 250 000 ипотечных кредитов, что создаст дополнительный спрос на жильё общей площадью около 15 млн кв.м. Субсидированную ставку обещают сделать фиксированной на весь срок займа. С заявкой можно будет обратиться до 1 ноября 2020-го.</p>\n'
              }
            ],
            asideCards: [
              {
                type: 'article-list',
                size: 'small',
                highlight: true,
                title: 'А вы это читали?',
                articles: [
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483,
                    title: '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
                    previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 5),
                    title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                    previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 15),
                    title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                    previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 35),
                    title: 'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
                    previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 55),
                    title: 'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
                    previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                  },
                  {
                    id: 1,
                    slug: '',
                    publishedAt: 1573746483 - (60 * 125),
                    title: 'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
                    previewText: 'ЮИТ сворачивает работу в Москве, Московской области и Ростове-на-Дону, уходит с рынка подряда и дорожного строительства'
                  }
                ],
              }
            ],
            tags: [
              {
                name: 'Тег 1',
                code: 'tag1'
              },
              {
                name: 'Тег 2',
                code: 'tag1'
              },
              {
                name: 'Тег 3',
                code: 'tag1'
              },
              {
                name: 'Тег 4',
                code: 'tag1'
              },
              {
                name: 'Тег 5',
                code: 'tag1'
              }
            ],
            relatedArticleCards: cards,
            event: route === '/event' ? {
              id: 1,
              name: 'Международная научно-практическая конференция «Световой дизайн»',
              type: 'Конференция',
              startedAt: 1573746483,
              finishedAt: 1573746483 + (60 * 60) * 6,
              address: 'Главный штаб, Государственный Эрмитаж; АРХКЛУБ на территории Севкабель Порта',
              phone: '+7 (812) 380–03–55',
              email: 'test@test.ru',
              site: 'http://nsp-event.ru',
              vkontakteLink: 'http://vk.com',
              facebookLink: 'http://vk.com',
              telegramLink: 'http://vk.com',
              twitterLink: 'http://vk.com'
            } : null
          },
          menu: route === 'article' ? [
            {
              name: 'Новостройки',
              slug: '',
              highlight: true
            },
            {
              name: 'Дороги',
              slug: '',
              highlight: false
            },
            {
              name: 'Среда',
              slug: '',
              highlight: false
            },
            {
              name: 'Жилые комплексы',
              slug: '',
              highlight: false
            }
          ] : []
        }
      );
    }
    this.response.notFound();
    return of();
  }

  getQuotes(filter = {}) {
    return of({
      count: 4,
      items: [
        {
          text: 'По статистике, к псевдожилью в Петербурге можно отнести около шестидесяти процентов строящихся комплексов. Нужно быть внимательным при выборе объекта для вложений',
          publishedAt: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
          sourceName: 'Название источника статьи',
          author: {
            photoXl: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            photoLg: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            photoMd: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            photoSm: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            firstName: 'Марина',
            lastName: 'Сторожевая',
            position: 'Директор по развитию, партнер М2Маркет '
          }
        },
        {
          text: 'Наш личный бюджет становится всё более тощим вовсе не из-за закредитованности. Дорожает жизнь вокруг нас. Поэтому спад на рынке жилья неизбежен...',
          publishedAt: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
          sourceName: 'Название источника статьи',
          author: {
            photoXl: null,
            photoLg: null,
            photoMd: null,
            photoSm: null,
            firstName: 'Иван',
            lastName: 'Иванов',
            position: 'Директор по развитию'
          }
        },
        {
          text: 'По статистике, к псевдожилью в Петербурге можно отнести около шестидесяти процентов строящихся комплексов. Нужно быть внимательным при выборе объекта для вложений',
          publishedAt: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
          sourceName: 'Название источника статьи',
          author: {
            photoXl: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            photoLg: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            photoMd: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            photoSm: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            firstName: 'Марина',
            lastName: 'Сторожевая',
            position: 'Директор по развитию, партнер М2Маркет '
          }
        },
        {
          text: 'Наш личный бюджет становится всё более тощим вовсе не из-за закредитованности. Дорожает жизнь вокруг нас. Поэтому спад на рынке жилья неизбежен...',
          publishedAt: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
          sourceName: 'Название источника статьи',
          author: {
            photoXl: null,
            photoLg: null,
            photoMd: null,
            photoSm: null,
            firstName: 'Иван',
            lastName: 'Иванов',
            position: 'Директор по развитию'
          }
        }
      ]
    });
  }

  getPerson(personId) {
    return of({
      data: {
        id: 1,
        slug: 'slug',
        photoXl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        photoLg: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        photoMd: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        photoSm: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        firstName: 'Глебова',
        middleName: 'Елена',
        lastName: 'Александровна',
        name: 'Глебова Елена Александровна',
        companyName: 'БестЪ. Коммерческая недвижимость»',
        position: 'Руководитель отдела продаж',
        description: 'Чудо, а не сотрудник',
        phone: '7 (931) 231-42-32',
        email: 'test@test.ru'
      },
      company: {
        id: 1,
        slug: 'best',
        logoXl: 'assets/images/cards/company/company.jpg',
        logoLg: 'assets/images/cards/company/company.jpg',
        logoMd: 'assets/images/cards/company/company.jpg',
        logoSm: 'assets/images/cards/company/company.jpg',
        name: 'БестЪ. Коммерческая недвижимость',
        phone: '+7 (812) 380–03–55',
        site: 'bestgroup.ru',
        activityName: 'Агентство недвижимости'
      }
    });
  }

  getCompany(companyId) {
    return of(
      {
        data: {
          id: 1,
          name: 'БестЪ. Коммерческая недвижимость',
          slug: 'best',
          activityName: 'Агентство недвижимости',
          phone: '+7 (812) 380–03–55',
          site: 'http://bestgroup.ru',
          logoXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          logoLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          logoMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          logoSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          address: '197022, Россия, Санкт-Петербург, Аптекарская наб., д. 20, Бизнес-центр «Авеню»',
          description: 'Основной вид деятельности: брокер сделок коммерческой недвижимости. Предоставляет полный спектр услуг на рынке коммерческой недвижимости от первичного формирования объекта до его последующей продажи, сдачи в аренду. В функции компании входит консалтинг на рынке коммерческой недвижимости, оценка, маркетинговые исследования, выработка концепций строящихся объектов и реконцепция существующих.',
          organizationForm: 'Общество с ограниченной ответственностью',
          latitude: 59.978246,
          longitude: 30.31480,
          vkontakteLink: 'http://vk.com',
          facebookLink: 'http://vk.com',
          telegramLink: 'http://vk.com',
          twitterLink: 'http://vk.com',
          email: 'best@bestgroup.ru'
        },
        apartmentComplexes: [
          {
            id: 1,
            name: 'ЖК «Новое купчино»',
            areaName: 'Василеостровский район',
            imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          },
          {
            id: 2,
            name: 'ЖК «Новый Лесснер»',
            areaName: 'Московский район',
            imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          },
          {
            id: 3,
            name: 'ЖК «LIFE-Лесная»',
            areaName: 'Выборгский район',
            imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          },
          {
            id: 4,
            name: 'ЖК «Новый Лесснер»',
            areaName: 'Московский район',
            imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          }
        ],
        people: [
          {
            id: 1,
            slug: 'slug',
            photoXl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoLg: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoMd: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoSm: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            firstName: 'Глебова',
            middleName: 'Елена',
            lastName: 'Александровна',
            companyName: 'БестЪ. Коммерческая недвижимость»',
            position: 'Руководитель отдела продаж'
          },
          {
            id: 2,
            slug: 'slug',
            photoXl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoLg: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoMd: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoSm: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            firstName: 'Демешенков',
            middleName: 'Вадим',
            lastName: 'Николаевич',
            companyName: 'БестЪ. Коммерческая недвижимость»',
            position: 'Руководитель отдела офисной недвижимости'
          },
          {
            id: 3,
            slug: 'slug',
            photoXl: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoLg: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoMd: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoSm: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            firstName: 'Лушников',
            middleName: 'Андрей',
            lastName: 'Владимирович',
            companyName: 'БестЪ. Коммерческая недвижимость»',
            position: 'председатель Совета директоров'
          },
          {
            id: 4,
            slug: 'slug',
            photoXl: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoLg: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoMd: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            photoSm: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            firstName: 'Свояволя',
            middleName: 'Ян',
            lastName: '',
            companyName: 'ООО «Главстрой-СПб»',
            position: 'Директор по маркетингу'
          },
        ]
      }
    );
  }

  getPersons(filter = {}) {
    return of({
      count: 4,
      items: [
        {
          id: 1,
          slug: 'slug',
          photoXl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoLg: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoMd: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoSm: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          firstName: 'Глебова',
          middleName: 'Елена',
          lastName: 'Александровна',
          companyName: 'БестЪ. Коммерческая недвижимость»',
          position: 'Руководитель отдела продаж'
        },
        {
          id: 2,
          slug: 'slug',
          photoXl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoLg: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoMd: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoSm: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          firstName: 'Демешенков',
          middleName: 'Вадим',
          lastName: 'Николаевич',
          companyName: 'БестЪ. Коммерческая недвижимость»',
          position: 'Руководитель отдела офисной недвижимости'
        },
        {
          id: 3,
          slug: 'slug',
          photoXl: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoLg: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoMd: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoSm: 'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          firstName: 'Лушников',
          middleName: 'Андрей',
          lastName: 'Владимирович',
          companyName: 'БестЪ. Коммерческая недвижимость»',
          position: 'председатель Совета директоров'
        },
        {
          id: 4,
          slug: 'slug',
          photoXl: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoLg: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoMd: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          photoSm: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          firstName: 'Свояволя',
          middleName: 'Ян',
          lastName: '',
          companyName: 'ООО «Главстрой-СПб»',
          position: 'Директор по маркетингу'
        },
      ]
    });
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

  getAreas() {
    return of({
      count: 3,
      items: [
        {
          id: 1,
          value: 'Район 1'
        },
        {
          id: 2,
          value: 'Район 2'
        },
        {
          id: 3,
          value: 'Район 3'
        }
      ]
    });
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
            slug: 'section',
            highlight: false
          },
          {
            name: 'Projects detail',
            slug: 'project',
            highlight: false
          },
        ]
      }
    );
  }

  getApartmentComplexes(filter = {}) {
    return of(
      {
        count: 4,
        items: [
          {
            id: 1,
            name: 'ЖК «Новое купчино»',
            areaName: 'Василеостровский район',
            imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          },
          {
            id: 2,
            name: 'ЖК «Новый Лесснер»',
            areaName: 'Московский район',
            imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          },
          {
            id: 3,
            name: 'ЖК «LIFE-Лесная»',
            areaName: 'Выборгский район',
            imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          },
          {
            id: 4,
            name: 'ЖК «Новый Лесснер»',
            areaName: 'Московский район',
            imageXl: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageLg: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageMd: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            imageSm: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          }
        ]
      }
    );
  }

  getApartmentComplexDetails(apartmentComplexId): Observable<{ data: ApartmentComplex }> {
    return of(
      {
        data: {
          id: 1,
          name: 'ЖК «LIFE-Лесная»',
          previewText: 'Зелёный квартал в тихом районе. Место, рядом с парками и садами, где для спокойной семейной жизни продумана каждая деталь. Квартал располагается в непосредственной близости от исторического центра и Петроградской стороны, в пяти минутах ходьбы от станции метро «Лесная».',
          typeId: 2,
          site: 'https://lesnaya.life',
          areaName: 'Приморский район',
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
          detailImageSm: 'https://images.unsplash.com/photo-1462774603919-1d8087e62cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
          content: [
            {
              type: 'text',
              data:
                '<h3 #description>Описание объекта</h3>\n' +
                '  <p>ЖК «LIFE-Лесная» представляет собой шесть жилых домов высотой от 10 до 13 этажей. В них запроектировано в общей\n' +
                '    сложности 1791 квартира (195 тыс. кв.м), почти половина из которых – двухкомнатные. Квартирография включает как\n' +
                '    традиционные квартиры с изолированными комнатами и кухней, так и востребованные варианты европланировок. В квартирах\n' +
                '    верхних этажей предусмотрена возможность организации камина. Подземный паркинг рассчитан на 1290 машино-мест.\n' +
                '    Технология строительства – монолитная. Первая очередь, состоящая из двух корпусов на 480 квартир, была сдана в конце\n' +
                '    прошлого года. Жильё передадут либо с предчистовой отдел-кой, либо «под ключ» – на выбор покупателя. У него также\n' +
                '    есть возможность заказать дополнительные опции в зависимости от выбранного пакета: замена ламината на паркет,\n' +
                '    установка тёплого пола, премиальная сантехника и электрическое оборудование. </p>\n' +
                '\n' +
                '  <h3>Условия покупки</h3>\n' +
                '  <ul>\n' +
                '    <li>\n' +
                '      100%-я оплата по договору долевого участия\n' +
                '    </li>\n' +
                '    <li>\n' +
                '      Заключение договора купли-продажи (для готовых корпусов)\n' +
                '    </li>\n' +
                '    <li>\n' +
                '      Ипотека (16 банков-партнёров)\n' +
                '    </li>\n' +
                '    <li>\n' +
                '      Рассрочка (несколько программ)\n' +
                '    </li>\n' +
                '  </ul>\n' +
                '  \n' +
                '  <hr>\n' +
                '\n' +
                '  <h3>Расположение</h3>\n' +
                '  <p>Жилой квартал LIFE-Лесная расположен на северо-востоке Санкт-Петербурга, в Выборгском районе, по адресу: улица\n' +
                '    Новолитовская.</p>\n' +
                '  <p><strong>В шаговой доступности от квартала</strong> — станция метро «Лесная» (500 метров) и остановки наземного\n' +
                '    общественного транспорта.</p>\n' +
                '  <p><strong>На автомобиле</strong> время в пути до исторического центра города составит 10 минут, до Петроградской\n' +
                '    стороны – 5 минут.</p>\n' +
                '  <p>Здесь легко планировать и дальние поездки: в 10-15 минутах выезды на Западный скоростной диаметр и кольцевую\n' +
                '    автодорогу. Дорога до аэропорта, железнодорожных и морских вокзалов не займет много времени.</p>'
            },
            {
              type: 'location',
              data: {
                showSocialFacilities: false,
                latitude: 59.983134,
                longitude: 30.356085,
                name: 'Название ЖК'
              },
              size: 'full-width'
            },
            {
              type: 'text',
              data: '<h3>Планировки</h3>\n' +
                '    <p>Предложение актуально на дату публикации (01.04.2019 г.)</p>'
            },
            {
              type: 'apartment_layout',
              data: {
                roomsCount: '1',
                area: '32.98',
                price: '2209660',
                description: '',
                imageXl: 'https://nsp.ru/files/zhk/2/9_flat_orig.png',
                imageLg: 'https://nsp.ru/files/zhk/2/9_flat_orig.png',
                imageMd: 'https://nsp.ru/files/zhk/2/9_flat_orig.png',
                imageSm: 'https://nsp.ru/files/zhk/2/9_flat_orig.png',
                thumbXl: 'https://nsp.ru/files/zhk/2/9_flat_orig.png',
                thumbLg: 'https://nsp.ru/files/zhk/2/9_flat_orig.png',
                thumbMd: 'https://nsp.ru/files/zhk/2/9_flat_orig.png',
                thumbSm: 'https://nsp.ru/files/zhk/2/9_flat_orig.png',
                title: null,
                alt: null
              }
            },
            {
              type: 'apartment_layout',
              data: {
                roomsCount: '2',
                area: '51.33',
                price: '3285120',
                description: '',
                imageXl: 'https://nsp.ru/files/zhk/2/11_flat_orig.png',
                imageLg: 'https://nsp.ru/files/zhk/2/11_flat_orig.png',
                imageMd: 'https://nsp.ru/files/zhk/2/11_flat_orig.png',
                imageSm: 'https://nsp.ru/files/zhk/2/11_flat_orig.png',
                image_title: null,
                image_alt: null
              }
            },
            {
              type: 'apartment_layout',
              data: {
                roomsCount: '3',
                area: '76.18',
                price: '4646980',
                description: '',
                imageXl: 'https://nsp.ru/files/zhk/2/13_flat_orig.png',
                imageLg: 'https://nsp.ru/files/zhk/2/13_flat_orig.png',
                imageMd: 'https://nsp.ru/files/zhk/2/13_flat_orig.png',
                imageSm: 'https://nsp.ru/files/zhk/2/13_flat_orig.png',
                image_title: null,
                image_alt: null
              }
            },
            {
              type: 'gallery',
              size: 'big',
              data: {
                images: [
                  {
                    thumbXl: 'https://nsp.ru/files/zhk/2/10_980.jpg',
                    thumbLg: 'https://nsp.ru/files/zhk/2/10_980.jpg',
                    thumbMd: 'https://nsp.ru/files/zhk/2/10_980.jpg',
                    thumbSm: 'https://nsp.ru/files/zhk/2/10_980.jpg',
                  },
                  {
                    thumbXl: 'https://nsp.ru/files/zhk/2/312_980.jpg',
                    thumbLg: 'https://nsp.ru/files/zhk/2/312_980.jpg',
                    thumbMd: 'https://nsp.ru/files/zhk/2/312_980.jpg',
                    thumbSm: 'https://nsp.ru/files/zhk/2/312_980.jpg',
                  },
                  {
                    thumbXl: 'https://nsp.ru/files/zhk/2/325_980.jpg',
                    thumbLg: 'https://nsp.ru/files/zhk/2/325_980.jpg',
                    thumbMd: 'https://nsp.ru/files/zhk/2/325_980.jpg',
                    thumbSm: 'https://nsp.ru/files/zhk/2/325_980.jpg',
                  }
                ]
              }
            }
          ]
        }
      }
    );
  }

  getCardFeed(filter) {
    let cards = [
      {
        type: 'article',
        size: 'small',
        articlePublishedAt: 1584608518,
        markerName: '💥 Свежее',
        title: 'Долги под апартами',
        previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
        view: 'half',
        articleViewsCount: 12453,
        articleId: 123,
        articleSlug: 'article-slug',
        imageXl: 'https://picsum.photos/304/152',
        imageLg: 'https://picsum.photos/304/152',
        imageMd: 'https://picsum.photos/304/152',
        imageSm: 'https://picsum.photos/304/152',
        smallImageXl: null,
        smallImageLg: null,
        smallImageMd: null,
        smallImageSm: null,
      },
      {
        type: 'article',
        size: 'small',
        articlePublishedAt: 1584608518,
        markerName: '💥 Свежее',
        title: 'Долги под апартами',
        previewText: '«Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия «Город с нуля. Возможности и ограничения» – панельную дискуссия',
        view: 'full',
        articleViewsCount: 12453,
        articleId: 123,
        articleSlug: 'article-slug',
        imageXl: 'https://picsum.photos/304/304',
        imageLg: 'https://picsum.photos/304/304',
        imageMd: 'https://picsum.photos/304/304',
        imageSm: 'https://picsum.photos/304/304',
        smallImageXl: null,
        smallImageLg: null,
        smallImageMd: null,
        smallImageSm: null,
      },
      {
        type: 'video',
        size: 'small',
        videoPublishedAt: 1584608518,
        markerName: '💥 Свежее',
        title: 'Долги под апартами',
        videoViewsCount: 12453,
        imageXl: 'https://picsum.photos/616/304',
        imageLg: 'https://picsum.photos/616/304',
        imageMd: 'https://picsum.photos/616/304',
        imageSm: 'https://picsum.photos/616/304',
        smallImageXl: null,
        smallImageLg: null,
        smallImageMd: null,
        smallImageSm: null,
        videoUrl: 'https://www.youtube.com/watch?v=s8z28NJTexE'
      }
    ];
    let i = 0;
    while (i < 4) {
      cards = cards.concat(cards);
      i++;
    }
    return of({
      cards
    });
  }
}
