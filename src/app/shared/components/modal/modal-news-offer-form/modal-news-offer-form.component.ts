import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../../services/modal.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-modal-news-offer-form',
  templateUrl: './modal-news-offer-form.component.html',
  styleUrls: ['./modal-news-offer-form.component.scss']
})
export class ModalNewsOfferFormComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;

  formGroup: FormGroup;
  agree: false;
  showConfirm: boolean;
  currentFileName: string;
  screen: string;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private responsive: ResponsiveService
  ) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.showConfirm = this.modalService.showConfirm;
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required]],
    });

  }

  ngAfterViewInit() {
    this.scrollRef.update();
  }

  submit() {
    if(!this.formGroup.valid) {
      return;
    } else {
      this.showConfirm = true;
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
