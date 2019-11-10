import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-modal-subscription-form',
  templateUrl: './modal-subscription-form.component.html',
  styleUrls: ['./modal-subscription-form.component.scss']
})
export class ModalSubscriptionFormComponent implements OnInit {
  formGroup: FormGroup;
  agree: false;
  showConfirm: boolean;
  constructor(private formBuilder: FormBuilder, private modalService: ModalService) { }

  ngOnInit() {
    this.showConfirm = this.modalService.showConfirm;
    this.formGroup = this.formBuilder.group({
      email: [''],
    });
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
