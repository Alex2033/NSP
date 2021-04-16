import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderHeightService {
  private headerHeight: BehaviorSubject<number>;

  constructor() {
    this.headerHeight = new BehaviorSubject<number>(0);
  }

  getValue(): Observable<number> {
    return this.headerHeight.asObservable();
  }

  setValue(newValue): void {
    this.headerHeight.next(newValue);
  }
}
