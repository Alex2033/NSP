import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { BannerService } from '../banner-data.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', {static: true}) menu: ElementRef;
  @ViewChild('navigationList', {static: true}) navigationList: ElementRef;
  dropdownVisible: boolean = false;
  showSearch: boolean = false;
  fixedMenu: boolean = false;
  navigationListWidth: number;
  menuPosition;

  get showBanner(): boolean {
    return this.bannerService.showBanner;
  }

  constructor(private bannerService: BannerService, public modal: ModalService) {}

  ngOnInit() {
    this.menuPosition = this.menu.nativeElement.offsetTop;
    this.navigationListWidth = this.navigationList.nativeElement.offsetWidth;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (windowScroll >= this.menuPosition) {
      this.fixedMenu = true;
    } else if (windowScroll < this.menuPosition) {
      this.fixedMenu = false;
    }
  }

  showWidth() {
    console.log(this.navigationListWidth);
  }

}
