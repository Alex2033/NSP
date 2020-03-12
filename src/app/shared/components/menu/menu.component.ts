import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  links: Array<object> = [
    {
      text: 'Новости',
      url: ''
    },
    {
      text: 'Дороги',
      url: ''
    },
    {
      text: 'Власть',
      url: ''
    },
    {
      text: 'Социалка',
      url: ''
    },
    {
      text: 'Жилые комплексы',
      url: ''
    },
    {
      text: 'Коммерческая недвижимость',
      url: ''
    },
    {
      text: 'Апартаменты',
      url: ''
    },
    {
      text: 'Мероприятия',
      url: ''
    },
    {
      text: 'Квадратный Петерубрг',
      url: ''
    },
    {
      text: 'Наша газета',
      url: ''
    },
    {
      text: 'Персоны',
      url: ''
    },
    {
      text: 'Компании',
      url: ''
    },
  ];

  constructor(public modal: ModalService, public menu: MenuService) { }

  ngOnInit(): void {
  }

  showPopup(id: string) {
    this.modal.open(id);
    this.menu.closeMenu();
  }

}
