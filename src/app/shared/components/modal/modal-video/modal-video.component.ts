import { Component, Input, OnInit } from '@angular/core';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  @Input() url: string;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  close() {
    this.modalService.close();
  }

}
