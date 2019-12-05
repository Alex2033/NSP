import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  apartments = [
    {
      image: 'https://images.unsplash.com/photo-1573867607131-872f83689352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam quis risus dignissim dictum. Integer consequat ligula at convallis consequat. Pellentesque convallis venenatis quam eu fermentum.',
      rooms: 1,
      square: 40.40,
      price: '2 950 000',
    },
    {
      image: 'https://images.unsplash.com/photo-1573867607131-872f83689352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam quis risus dignissim dictum. Integer consequat ligula at convallis consequat. Pellentesque convallis venenatis quam eu fermentum.',
      rooms: 2,
      square: 76.10,
      price: '4 200 000',
    },
    {
      image: 'https://images.unsplash.com/photo-1573867607131-872f83689352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam quis risus dignissim dictum. Integer consequat ligula at convallis consequat. Pellentesque convallis venenatis quam eu fermentum.',
      rooms: 3,
      square: 89.25,
      price: '5 200 000',
    },
  ];

  images = [
    'https://images.unsplash.com/photo-1504919650220-a884f1ce2c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1555851117-49167a4d285f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1556917731-5bace20a8322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1467842747329-8a4b784e8158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
  ];

  companyCard = {
    image: 'https://images.unsplash.com/photo-1574702256908-ab5f9ff429dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    title: 'ГК «Пионер»',
    text: 'Группа компаний «Пионер»  специализируется на реализации градостроительных проектов многофункциональной и комплексной жилой застройки',
    phone: '+7 (495) 502 95 59',
    email: 'office@pioneer.ru',
    site: 'pioneer.ru',
    category: 'Персоны',
  };

  objectCards = [
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'backgroundImage'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
