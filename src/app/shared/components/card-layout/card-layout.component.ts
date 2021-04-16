import {Component, Input, OnInit} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {
  @Input() cards;
  @Input() type: string; // Можно указать тип если карточки одного типа, пока что работает с объектами
  @Input() onlyFixed = false;
  private screen;
  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
