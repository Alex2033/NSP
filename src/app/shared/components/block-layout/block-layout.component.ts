import {Component, OnInit, Input} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-block-layout',
  templateUrl: './block-layout.component.html',
  styleUrls: ['./block-layout.component.scss']
})
export class BlockLayoutComponent implements OnInit {

  @Input() blocks;
  @Input() entityId: number;
  screen: string;

  constructor(private responsive: ResponsiveService) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    const result = [];
    let buttonsGroup = [];
    this.blocks.map(block => {
      if (block.type !== 'button') {
        if (buttonsGroup.length > 0) {
          // Формирование группы кнопок и добавление в сетку
          result.push({
            type: 'button-group',
            buttons: buttonsGroup
          });
          buttonsGroup = [];
        }
        result.push(block);
      } else {
        buttonsGroup.push(block);
        if (buttonsGroup.length === 2) {
          result.push({
            type: 'button-group',
            buttons: buttonsGroup
          });
          buttonsGroup = [];
        }
      }
    });

    this.blocks = result;
  }

}
