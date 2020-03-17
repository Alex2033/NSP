import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {ApiService} from './api.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  showMenu = false;
  menuElements;

  constructor(private api: ApiService) {
  }

  openMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

  get() {
    if (this.menuElements) {
      return of(this.menuElements);
    } else {
      return this.api.getMenuElements().pipe(map((data) => {
        this.menuElements = data.elements;
        return data.elements;
      }));
    }
  }
}
