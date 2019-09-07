import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { BannerService } from '../banner-data.service';

@Component({
  selector: 'app-topline-advertising',
  templateUrl: './topline-advertising.component.html',
  styleUrls: ['./topline-advertising.component.scss'],
})
export class ToplineAdvertisingComponent implements OnInit {
  @ViewChild('advertising', {static: true}) advertising: ElementRef;
  advertisingHeight;
  name: any;
  showBanner: boolean;
  displayAdvertising: boolean = false;

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.advertisingHeight = this.advertising.nativeElement.offsetHeight;
    this.showBanner = this.bannerService.showBanner;
  }

  changeBanner() {
    this.showBanner = false;
    this.bannerService.showBanner = false;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (windowScroll >= this.advertisingHeight) {
      this.displayAdvertising = true;
    }
  }

}
