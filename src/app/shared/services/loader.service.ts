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
    console.log('show');
    this.state.next(true);
  }
  hide() {
    console.log('hide');
    this.state.next(false);
  }
}
