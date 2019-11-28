import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.scss']
})
export class ImageBlockComponent implements OnInit {

  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}
