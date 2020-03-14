import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuElements = [];
  constructor(public modal: ModalService, public menu: MenuService) { }

  ngOnInit(): void {
    this.menu.get().subscribe((elements) => {
      this.menuElements = elements;
    });
  }

  showPopup(id: string) {
    this.modal.open(id);
    this.menu.closeMenu();
  }

}
