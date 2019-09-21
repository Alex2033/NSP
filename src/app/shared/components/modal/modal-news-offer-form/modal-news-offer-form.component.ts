import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-modal-news-offer-form',
  templateUrl: './modal-news-offer-form.component.html',
  styleUrls: ['./modal-news-offer-form.component.scss']
})
export class ModalNewsOfferFormComponent implements OnInit {
  formGroup: FormGroup;
  agree: false;
  constructor(private formBuilder: FormBuilder, private modalService: ModalService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required]],
    });
  }

  close() {
    this.modalService.close();
  }
}
