import { Component, OnInit, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  entryDateValue: Date = new Date();
  screen: string;

  @Input() selectFirst;
  @Input() selectSecond;
  @Input() placeholder;
  @Input() datepicker;

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  entryDate(event: MatDatepickerInputEvent<Date>) {
    this.entryDateValue = event.value;
  }

}
