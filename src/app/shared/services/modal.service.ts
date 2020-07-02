import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ModalConfiguration} from '../models/modal-configuration';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  current: Subject<ModalConfiguration | null> = new Subject();
  modalSubject: Subject<boolean>;

  constructor() {
  }

  open(id: string, parameters?: any) {
    const configuration = {
      id,
      parameters
    };
    this.current.next(configuration);
    if (!this.modalSubject) {
      this.modalSubject = new Subject();
    }
    return this.modalSubject;
  }

  close(result = false) {
    this.current.next(null);
    if (this.modalSubject) {
      this.modalSubject.next(result);
      this.modalSubject.complete();
      delete this.modalSubject;
    }
  }

  // confirm(text: string): Observable<boolean> {
  //   this.open(
  //     'confirm',
  //     {
  //       text: text
  //     }
  //   );
  //   this.confirmSubject = new Subject();
  //   return this.confirmSubject;
  // }
  // closeConfirmWindow(result: boolean) {
  //   this.close();
  //   this.confirmSubject.next(result);
  //   this.confirmSubject.complete();
  //   delete this.confirmSubject;
  // }
}
