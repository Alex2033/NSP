import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-block-layout',
  templateUrl: './block-layout.component.html',
  styleUrls: ['./block-layout.component.scss']
})
export class BlockLayoutComponent implements OnInit {

  @Input() blocks;
  @Input() entityId: number;
  screen: string;

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
