import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-subscription-form',
  templateUrl: './modal-subscription-form.component.html',
  styleUrls: ['./modal-subscription-form.component.scss']
})
export class ModalSubscriptionFormComponent implements OnInit {
  formGroup: FormGroup;
  agree: false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [''],
    });
  }

}
