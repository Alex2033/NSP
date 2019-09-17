import { Component, OnInit, Optional, Self } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends TextComponent implements ControlValueAccessor, OnInit {
  constructor(
    @Optional() @Self() public ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit() {
  }
}
