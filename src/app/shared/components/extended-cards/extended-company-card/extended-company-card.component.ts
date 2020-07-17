import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extended-company-card',
  templateUrl: './extended-company-card.component.html',
  styleUrls: ['./extended-company-card.component.scss']
})

export class ExtendedCompanyCardComponent implements OnInit {
  @Input() company;
  @Input() openInNewWindow = false;
  constructor() { }

  ngOnInit() {
  }

}
