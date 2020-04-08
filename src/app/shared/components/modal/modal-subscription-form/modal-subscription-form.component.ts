import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors} from '@angular/forms';
import {ModalService} from '../../../services/modal.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { NgScrollbar } from 'ngx-scrollbar';
import {finalize} from 'rxjs/operators';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-modal-subscription-form',
  templateUrl: './modal-subscription-form.component.html',
  styleUrls: ['./modal-subscription-form.component.scss']
})
export class ModalSubscriptionFormComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;
  formErrors: ValidationErrors | null;
  formGroup: FormGroup;
  showConfirm: boolean;
  screen: string;
  loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private responsive: ResponsiveService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.showConfirm = this.modalService.showConfirm;
    this.formGroup = this.formBuilder.group({
      email: [''],
      agree: [false]
    });
  }

  ngAfterViewInit() {
    this.scrollRef.update();
  }

  submit() {
    if (!this.loading && this.formGroup.valid) {
      this.loading = true;
      this.api.addEmailSubscription(this.formGroup.value).pipe(finalize(() => {
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

  close() {
    this.modalService.close();
  }
}
