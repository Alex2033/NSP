import {Component, Input, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, ValidationErrors} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {finalize} from 'rxjs/operators';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-event-registration-block',
  templateUrl: './event-registration-block.component.html',
  styleUrls: ['./event-registration-block.component.scss']
})
export class EventRegistrationBlockComponent implements OnInit {
  formErrors: ValidationErrors | null;
  formGroup: FormGroup;
  loading = false;
  @Input() data: any;
  eventDisplayDate: string;
  allowEventRegistration = false;
  showConfirm: boolean;
  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      event_id: [this.data.id],
      name: ['', []],
      position: ['', []],
      company_name: ['', []],
      phone: ['', []],
      email: ['', []],
      agree: [false]
    });

    const currentDate = new Date();
    if (currentDate.getTime() / 1000 < this.data.startedAt) {
      this.allowEventRegistration = true;
    }

    const datePipe = new DatePipe('ru-RU');
    const startDate = new Date(this.data.startedAt * 1000);
    const finishDate = new Date(this.data.finishedAt * 1000);
    this.eventDisplayDate = datePipe.transform(this.data.startedAt * 1000, 'd MMMM yyyy');
    if (startDate.getFullYear().toString() + startDate.getMonth().toString() + startDate.getDate().toString() !== finishDate.getFullYear().toString() + finishDate.getMonth().toString() + finishDate.getDate().toString()) {
      if (startDate.getHours() !== 0 || startDate.getMinutes() !== 0) {
        this.eventDisplayDate += ', ' + datePipe.transform(this.data.startedAt * 1000, 'shortTime');
      }

      this.eventDisplayDate += ' — ' + datePipe.transform(this.data.finishedAt * 1000, 'd MMMM yyyy');
      if (finishDate.getHours() !== 0 || finishDate.getMinutes() !== 0) {
        this.eventDisplayDate += ', ' + datePipe.transform(this.data.finishedAt * 1000, 'shortTime');
      }
    } else {
      if (startDate.getHours() !== 0 || startDate.getMinutes() !== 0) {
        this.eventDisplayDate += ', ' + datePipe.transform(this.data.startedAt * 1000, 'shortTime');
        if (startDate.getHours() + startDate.getMinutes() !== finishDate.getHours() + finishDate.getMinutes()) {
          this.eventDisplayDate += ' — ' + datePipe.transform(this.data.finishedAt * 1000, 'shortTime');
        }
      }
    }
  }

  submit() {
    if (!this.loading && this.formGroup.valid) {
      this.loading = true;
      this.api.sendEventRegistration(this.formGroup.value).pipe(finalize(() => {
        this.loading = false;
      })).subscribe(() => {
        this.showConfirm = true;
      }, (response) => {
        if (response.status === 422) {
          this.formErrors = response.error;
        }
      });
    }
  }

}
