import { Component, Input, OnInit } from '@angular/core';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  @Input() url: string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  close() {
    this.modalService.close();
  }

}
