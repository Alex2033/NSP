import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {

  @Input() content;
  @Input() highlight;
  constructor() { }

  ngOnInit() {
  }

}
