import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../../../contracts/person';

@Component({
  selector: 'app-extended-person-card',
  templateUrl: './extended-person-card.component.html',
  styleUrls: ['./extended-person-card.component.scss']
})
export class ExtendedPersonCardComponent implements OnInit {
  @Input() useLink = true;
  @Input() person: Person;
  @Input() openInNewWindow = false;
  constructor() { }

  ngOnInit() {
  }

}
