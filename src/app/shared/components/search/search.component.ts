import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ResponsiveService} from '../../services/responsive.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  entryDateValue: Date = new Date();
  screen: string;
  formGroup: FormGroup;
  @Input() selectFirst: { placeholder: string; attribute: string; options: any[] };
  @Input() selectSecond: { placeholder: string; attribute: string; options: any[] };
  @Input() placeholder;
  @Input() datepicker;
  @Input() shortVersion;
  @Output() apply: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private responsive: ResponsiveService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.route.queryParams.subscribe(() => {
      this.buildForm();
    });
    this.route.params.subscribe(() => {
      this.buildForm();
    });
  }

  buildForm() {
    const controls = {
      search: [this.route.snapshot.queryParams.search ? this.route.snapshot.queryParams.search : null]
    };
    if (this.selectFirst) {
      if (this.route.snapshot.queryParams[this.selectFirst.attribute]) {
        controls[this.selectFirst.attribute] = [this.route.snapshot.queryParams[this.selectFirst.attribute]];
      } else if (this.route.snapshot.params[this.selectFirst.attribute]) {
        controls[this.selectFirst.attribute] = [this.route.snapshot.params[this.selectFirst.attribute]];
      } else {
        controls[this.selectFirst.attribute] = [null];
      }
    }
    if (this.selectSecond) {
      if (this.route.snapshot.queryParams[this.selectSecond.attribute]) {
        controls[this.selectSecond.attribute] = [this.route.snapshot.queryParams[this.selectSecond.attribute]];
      } else if (this.route.snapshot.params[this.selectSecond.attribute]) {
        controls[this.selectSecond.attribute] = [this.route.snapshot.params[this.selectSecond.attribute]];
      } else {
        controls[this.selectSecond.attribute] = [null];
      }
    }
    if (!this.formGroup) {
      this.formGroup = this.formBuilder.group(controls);
    } else {
      Object.keys(controls).map((attribute) => {
        this.formGroup.controls[attribute].setValue(controls[attribute][0]);
      });
    }
  }

  entryDate(event: MatDatepickerInputEvent<Date>) {
    this.entryDateValue = event.value;
  }

  submit() {
    this.apply.emit(this.formGroup.value);
  }

  clear() {
    this.formGroup.reset();
    this.submit();
  }
}
