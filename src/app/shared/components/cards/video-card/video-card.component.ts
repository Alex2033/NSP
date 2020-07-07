import {Component, Input, OnInit} from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';
import { ModalService } from '../../../services/modal.service';
import {VideoCard} from '../../../contracts/video-card';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent extends ResizableCardComponent implements OnInit {
  @Input() data: VideoCard;
  @Input() displayDate = true;
  constructor(public modal: ModalService) {
    super();
  }

  ngOnInit() {
  }
}
