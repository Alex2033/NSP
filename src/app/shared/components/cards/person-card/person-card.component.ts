import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../../../contracts/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() person: Person;
  @Input() openInNewWindow = false;

  constructor() { }

  ngOnInit() {
  }

}
