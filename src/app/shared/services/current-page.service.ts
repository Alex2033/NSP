import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {NavigationStart, Router, Scroll} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {
  state: Subject<{ type: string; id: number }> = new Subject();

  next(config?) {
    if (config && config.type && config.data.id) {
      this.state.next({type: config.type, id: config.data.id});
    } else {
      this.state.next();
    }

  }

  value() {
    return this.state;
  }
}
