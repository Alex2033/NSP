import { Component, Input, OnInit } from '@angular/core';
import {ModalService} from '../../../services/modal.service';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  @Input() url: string;

  screen: string;
  constructor(private modalService: ModalService, private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  close() {
    this.modalService.close();
  }

}
