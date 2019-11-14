import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extended-person-card',
  templateUrl: './extended-person-card.component.html',
  styleUrls: ['./extended-person-card.component.scss']
})
export class ExtendedPersonCardComponent implements OnInit {

  @Input() person;

  constructor() { }

  ngOnInit() {
  }

}
