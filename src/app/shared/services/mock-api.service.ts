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

  getQuotes(filter = {}) {
    return of({
      count: 4,
      items: [
        {
          text: 'По статистике, к псевдожилью в Петербурге можно отнести около шестидесяти процентов строящихся комплексов. Нужно быть внимательным при выборе объекта для вложений',
          published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
          source: {
            name: 'Название источника статьи',
            url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
          },
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
          published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
          source: {
            name: '',
            url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
          },
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
          published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
          source: {
            name: 'Название источника статьи',
            url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
          },
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
          published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
          source: {
            name: '',
            url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
          },
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
        companyName: 'БестЪ. Коммерческая недвижимость»',
        position: 'Руководитель отдела продаж'
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
