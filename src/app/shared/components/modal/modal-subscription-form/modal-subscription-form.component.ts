import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ModalService} from '../../../services/modal.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-modal-subscription-form',
  templateUrl: './modal-subscription-form.component.html',
  styleUrls: ['./modal-subscription-form.component.scss']
})
export class ModalSubscriptionFormComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;

  formGroup: FormGroup;
  agree: false;
  showConfirm: boolean;
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
      email: [''],
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
}
