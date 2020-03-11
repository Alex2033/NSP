import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() content;
  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;

  showDropdown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setLabel(option) {
    this.content.name = option;
    this.showDropdown = false;
  }

  toggleDropdown() {
    if (this.showDropdown) {
      this.showDropdown = false;
    } else {
      this.showDropdown = true;
      setTimeout(() => {
        this.scrollRef.update();
      }, 0);
    }
  }
}
