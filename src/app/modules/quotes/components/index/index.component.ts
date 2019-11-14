import { Component, OnInit } from '@angular/core';
import {Quote} from '../../../../shared/contracts/quote';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  quotes: Quote[] = [
    {
      quote: 'Текст цитаты',
      published_at: 1573746483, // При подстановке в шаблон нужно будет перевести в МС -> {{ quote.published_at * 1000 | date }}
      source: {
        name: 'Название источника статьи',
        url: 'Ссылка на источник', // Ссылки может не быть, тогда вместо <a> должен быть <span>
      },
      author: {
        avatar: 'ссылка на изображение',
        firstName: 'Иван',
        lastName: 'Иванов',
        position: 'Директор по развитию'
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
