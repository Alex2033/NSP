import { Component, OnInit, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  entryDateValue: Date = new Date();

  @Input() selectFirst;
  @Input() selectSecond;
  @Input() placeholder;
  @Input() datepicker;

  constructor() { }

  ngOnInit() {
  }

  entryDate(event: MatDatepickerInputEvent<Date>) {
    this.entryDateValue = event.value;
  }

}
