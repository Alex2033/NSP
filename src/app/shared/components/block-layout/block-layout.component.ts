import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-layout',
  templateUrl: './block-layout.component.html',
  styleUrls: ['./block-layout.component.scss']
})
export class BlockLayoutComponent implements OnInit {

  @Input() blocks;

  constructor() { }

  ngOnInit() {
  }

}
