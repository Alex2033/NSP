import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {

  @Input() company;

  constructor() { }

  ngOnInit() {
  }

}
