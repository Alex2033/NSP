import { Component, OnInit, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { BannerService } from '../banner-data.service';

@Component({
  selector: 'app-topline-advertising',
  templateUrl: './topline-advertising.component.html',
  styleUrls: ['./topline-advertising.component.scss'],
})
export class ToplineAdvertisingComponent implements OnInit {
  @ViewChild('advertising', {static: true}) advertising: ElementRef;
  @Output() displayAdvertisingDetection = new EventEmitter();
  advertisingHeight;
  name: any;
  displayAdvertising: boolean = false;
  showActions: boolean = false;

  get showBanner(): boolean {
    return this.bannerService.showBanner;
  }

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.advertisingHeight = this.advertising.nativeElement.offsetHeight;
  }

  changeBanner() {
    this.bannerService.showBanner = false;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (windowScroll >= this.advertisingHeight) {
      this.displayAdvertising = true;
      this.displayAdvertisingDetection.emit(true);
    }
  }

}
