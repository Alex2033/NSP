import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {ApiService} from './api.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  showMenu = false;
  globalMenuElements;
  private projectMenuElements = [];
  constructor(private api: ApiService) {
  }

  openMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

  getGlobalMenu() {
    if (this.globalMenuElements) {
      return of(this.globalMenuElements);
    } else {
      return this.api.getMenuElements().pipe(map((data) => {
        this.globalMenuElements = data.elements;
        return data.elements;
      }));
    }
  }

  getProjectMenu() {
    return this.projectMenuElements;
  }

  setProjectMenuElements(elements) {
    this.projectMenuElements = elements;
  }
}
