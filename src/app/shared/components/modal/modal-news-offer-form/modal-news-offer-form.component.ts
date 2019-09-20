import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-news-offer-form',
  templateUrl: './modal-news-offer-form.component.html',
  styleUrls: ['./modal-news-offer-form.component.scss']
})
export class ModalNewsOfferFormComponent implements OnInit {
  formGroup: FormGroup;
  agree: false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

}
