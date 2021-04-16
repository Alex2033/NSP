import {Component, OnInit, Input, ViewChild, Self, Optional, Inject, PLATFORM_ID} from '@angular/core';
import {NgScrollbar} from 'ngx-scrollbar';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  public value: number | string;
  activeOption: { id: number | string; value: string } | null;
  @Input() options: { id: number | string; value: string }[] = [];
  @Input() errorMessages: any;
  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;
  showDropdown = false;
  @Input() placeholder: string;

  constructor(@Optional() @Self() public ngControl: NgControl, @Inject(PLATFORM_ID) private platformId: any) {
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
  }

  onChange: any = () => {

  };
  onTouched: any = () => {

  };

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
    this.showDropdown = false;
    this.value = value;
    this.activeOption = this.options.find(x => x.id == value);
    this.onChange(this.value);
  }

  toggleDropdown() {
    if (this.showDropdown) {
      this.showDropdown = false;
    } else {
      this.showDropdown = true;
      if(isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.scrollRef.update();
        }, 0);
      }
    }
  }
}
