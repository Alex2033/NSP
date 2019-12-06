import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  blocks = [
    {
      type: 'image',
      config: {
        imageUrl: 'https://images.unsplash.com/photo-1461409971633-aa0e46732112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
      },
    },
    {
      type: 'text',
      paragraphs: [
        { 
          text: 'Торжественное открытие и первый день конференции пройдут 1 ноября в Главном штабе Государственного Эрмитажа. Обсуждения в этот день будут посвящены развитию умной световой среды в городах, музеях, галереях и других выставочных пространствах. Среди главных событий дня — панельные дискуссии «Комфортная световая среда в эпоху цифровизации», «Смарт-решения для жилых кварталов», «Смарт-решения для жилых кварталов», «Сохранение идентичности музеев при трансформации экспозиций в цифровую эпоху. Инновационные методы vs традиции» с участием представителей органов власти, академического и профессионального сообществ.' 
        },
        { 
          text: 'Сотрудники Государственного Эрмитажа в своих выступлениях затронут вопросы света в музее и современных технологий. Валерий Лукин, главный архитектор, расскажет об архитектурном освещении зданий и помещений Эрмитажа; Екатерина Балахнина, сотрудник Отдела Главного энергетика — об экспозиционном освещении и рабочей группе «Музейное освещение» в составе Научно-технического совета светотехнической отрасли; Дмитрий Есаков, сотрудник Сектора компьютерной техники — о развитии VR/AR-проектов в Эрмитаже.' 
        },
      ]
    },
  ];

  carouselConfig = {
    header: 'Партнеры',
    slides: [
      'https://valo-spb-official.ru/image/catalog/main/favicon.png',
      'https://valo-spb-official.ru/image/catalog/main/favicon.png',
      'https://valo-spb-official.ru/image/catalog/main/favicon.png',
      'https://valo-spb-official.ru/image/catalog/main/favicon.png',
      'https://valo-spb-official.ru/image/catalog/main/favicon.png',
      'https://valo-spb-official.ru/image/catalog/main/favicon.png',
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
