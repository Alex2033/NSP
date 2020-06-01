import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {
  @Input() cards;
  @Input() type: string; // Можно указать тип если карточки одного типа, пока что работает с объектами
  @Input() onlyFixed: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
