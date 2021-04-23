import {Component, Input, OnInit} from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';
import { ModalService } from '../../../services/modal.service';
import {VideoCard} from '../../../contracts/video-card';
import {ResponsiveService} from '../../../services/responsive.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent extends ResizableCardComponent implements OnInit {
  @Input() data: VideoCard;
  @Input() displayDate = true;
  screen;
  constructor(public modal: ModalService, private responsive: ResponsiveService) {
    super();
  }

  ngOnInit() {
    this.responsive.screen.subscribe(value => {
      this.screen = value;
    });
  }
}
