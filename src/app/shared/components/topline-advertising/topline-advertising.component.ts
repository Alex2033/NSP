import {Component, OnInit, ViewChild, ElementRef, HostListener, Output, EventEmitter, Input} from '@angular/core';
import {translateAnimation} from '../../animations/translate-animation';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-topline-advertising',
  templateUrl: './topline-advertising.component.html',
  styleUrls: ['./topline-advertising.component.scss'],
  animations: [
    translateAnimation(1000)
  ]
})
export class ToplineAdvertisingComponent implements OnInit {
  topHeaderHeight;
  name: any;
  showActions: boolean = false;
  show: boolean;
  closingReasons = [];
  @Output() visible: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() height: number;
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.show = true;
    this.visible.next(true);
    this.api.getAdvertisementClosingReasons().subscribe(data => {
      this.closingReasons = data.reasons;
    });
    // this.topHeaderHeight = 74;
  }

  close() {
    this.show = false;
    this.visible.next(false);
  }
  //
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (windowScroll >= this.topHeaderHeight) {
  //     // this.show = true;
  //   }
  // }

}
