import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalConfiguration } from '../../models/modal-configuration';
import { animate, style, transition, trigger } from '@angular/animations';
import { fadeInOutAnimation } from '../../animations/fade-in-out.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    fadeInOutAnimation(),
    trigger('slideRight', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({transform: 'translate(100%, 0)'}),
        animate(200, style({transform: 'translate(0, 0)'}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({transform: 'translate(100%, 0)'}))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  current: ModalConfiguration;
  constructor(private modalService: ModalService, private router: Router) {
    this.modalService.current.subscribe((configuration: ModalConfiguration) => {
      this.current = configuration;
    });
    // this.current = new ModalConfiguration();
    // this.current.id = 'recovery';
  }

  ngOnInit() {
  }
  close() {
    this.modalService.close();
  }
}
