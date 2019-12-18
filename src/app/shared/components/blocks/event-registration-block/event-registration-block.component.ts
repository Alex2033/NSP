import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-registration-block',
  templateUrl: './event-registration-block.component.html',
  styleUrls: ['./event-registration-block.component.scss']
})
export class EventRegistrationBlockComponent implements OnInit {
  formGroup: FormGroup;
  agree: false;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      company: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    if(!this.formGroup.valid) {
      return;
    }
  }

}
