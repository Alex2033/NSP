import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ModalService} from '../../../services/modal.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { NgScrollbar } from 'ngx-scrollbar';
import {finalize} from 'rxjs/operators';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-modal-news-offer-form',
  templateUrl: './modal-news-offer-form.component.html',
  styleUrls: ['./modal-news-offer-form.component.scss']
})
export class ModalNewsOfferFormComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;
  formErrors: ValidationErrors | null;
  formGroup: FormGroup;
  loading = false;
  showConfirm: boolean;
  currentFileName: string;
  screen: string;
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
      name: [''],
      email: [''],
      content: [''],
      agree: [false]
    });

  }

  ngAfterViewInit() {
    this.scrollRef.update();
  }

  submit() {
    if (!this.loading && this.formGroup.valid) {
      this.loading = true;
      this.api.sendNews(this.formGroup.value).pipe(finalize(() => {
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

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.currentFileName = event.target.files[0].name;
    }
  }
}
