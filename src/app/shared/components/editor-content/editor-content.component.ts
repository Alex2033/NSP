import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.scss']
})
export class EditorContentComponent implements OnInit {
  @Input() data: string;
  constructor() { }

  ngOnInit(): void {
  }

}
