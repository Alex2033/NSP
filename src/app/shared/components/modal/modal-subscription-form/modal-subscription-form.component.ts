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
  constructor(private formBuilder: FormBuilder, private modalService: ModalService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [''],
    });
  }

  close() {
    this.modalService.close();
  }
}
