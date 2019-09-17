import { Component, OnInit } from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent extends ResizableCardComponent implements OnInit {

  constructor(public modal: ModalService) {
    super();
  }

  ngOnInit() {
  }

}
