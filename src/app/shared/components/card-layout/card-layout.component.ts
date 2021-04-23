import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit, AfterViewInit {
  @Input() cards;
  @Input() type: string; // Можно указать тип если карточки одного типа, пока что работает с объектами
  @Input() onlyFixed = false;
  public screen;
  start = null;
  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.start = new Date().getTime();
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  ngAfterViewInit() {
  }

}
