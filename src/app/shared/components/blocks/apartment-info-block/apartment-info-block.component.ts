import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apartment-info-block',
  templateUrl: './apartment-info-block.component.html',
  styleUrls: ['./apartment-info-block.component.scss']
})
export class ApartmentInfoBlockComponent implements OnInit {

  @Input() apartment;

  constructor() { }

  ngOnInit() {
  }

}
