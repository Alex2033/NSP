import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  panelsState: Subject<boolean> = new Subject<boolean>();
  state: Subject<boolean> = new Subject<boolean>();
  constructor() { }


  hidePanels() {
    this.panelsState.next(false);
  }
  show() {
    this.state.next(true);
  }
  hide() {
    this.state.next(false);
  }
}
