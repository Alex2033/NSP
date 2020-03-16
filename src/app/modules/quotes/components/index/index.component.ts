import { Component, OnInit } from '@angular/core';
import {Quote} from '../../../../shared/contracts/quote';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  screen: string;

  quotes: Quote[] = [
    {
      quote: 'По статистике, к псевдожилью в Петербурге можно отнести около шестидесяти процентов строящихся комплексов. Нужно быть внимательным при выборе объекта для вложений',
      published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
      source: {
        name: 'Название источника статьи',
        url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
      },
      author: {
        avatar: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        firstName: 'Марина',
        lastName: 'Сторожевая',
        position: 'Директор по развитию, партнер М2Маркет '
      }
    },
    {
      quote: 'Наш личный бюджет становится всё более тощим вовсе не из-за закредитованности. Дорожает жизнь вокруг нас. Поэтому спад на рынке жилья неизбежен...',
      published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
      source: {
        name: '',
        url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
      },
      author: {
        avatar: '',
        firstName: 'Иван',
        lastName: 'Иванов',
        position: 'Директор по развитию'
      }
    },
    {
      quote: 'По статистике, к псевдожилью в Петербурге можно отнести около шестидесяти процентов строящихся комплексов. Нужно быть внимательным при выборе объекта для вложений',
      published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
      source: {
        name: 'Название источника статьи',
        url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
      },
      author: {
        avatar: 'https://images.unsplash.com/photo-1566680473674-0bbbbeab1c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
        firstName: 'Марина',
        lastName: 'Сторожевая',
        position: 'Директор по развитию, партнер М2Маркет '
      }
    },
    {
      quote: 'Наш личный бюджет становится всё более тощим вовсе не из-за закредитованности. Дорожает жизнь вокруг нас. Поэтому спад на рынке жилья неизбежен...',
      published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
      source: {
        name: '',
        url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
      },
      author: {
        avatar: '',
        firstName: 'Иван',
        lastName: 'Иванов',
        position: 'Директор по развитию'
      }
    }
  ];
  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => { 
      this.screen = screen;
    });
  }

}
