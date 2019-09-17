import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
