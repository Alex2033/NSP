import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-apartment-info-block',
  templateUrl: './apartment-info-block.component.html',
  styleUrls: ['./apartment-info-block.component.scss']
})
export class ApartmentInfoBlockComponent implements OnInit {
  screen: string;
  @Input() data;

  constructor(private responsive: ResponsiveService, public modal: ModalService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }
  openModal() {
    this.modal.open('gallery', {images: [this.data], index: 0});
  }
}
