import {Component, OnInit, Input, ViewChild, Self, Optional} from '@angular/core';
import {NgScrollbar} from 'ngx-scrollbar';
import {ControlValueAccessor, NgControl} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  public value: number;
  activeOption: { id: number, value: string } | null;
  @Input() options: { id: number, value: string }[] = [];
  @Input() errorMessages: any;
  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;
  showDropdown = false;
  @Input() placeholder: string;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
  }

  onChange: any = () => {

  }
  onTouched: any = () => {

  }

  get errorState() {
    return this.ngControl && this.ngControl.invalid;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: number | string): void {
    if (typeof value === 'string') {
      value = parseInt(value, 10);
    }
    this.showDropdown = false;
    this.value = value;
    this.activeOption = this.options.find(x => x.id === value);
    this.onChange(this.value);
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
