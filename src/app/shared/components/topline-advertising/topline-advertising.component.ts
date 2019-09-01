import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-topline-advertising',
  templateUrl: './topline-advertising.component.html',
  styleUrls: ['./topline-advertising.component.scss']
})
export class ToplineAdvertisingComponent implements OnInit {
  @ViewChild('advertising', {static: true}) advertising: ElementRef;
  advertisingHeight;
  showBanner: boolean = true;
  displayAdvertising: boolean = false;
  constructor() { }

  ngOnInit() {
    this.advertisingHeight = this.advertising.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (windowScroll >= this.advertisingHeight) {
      this.displayAdvertising = true;
    }
  }

}
