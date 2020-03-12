import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { BannerService } from '../banner-data.service';
import { ModalService } from '../../services/modal.service';
import { ResponsiveService } from '../../services/responsive.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', {static: true}) menu: ElementRef;
  @ViewChild('navigationList', {static: true}) navigationList: ElementRef;
  @ViewChild('dropdownList', {static: true}) dropdownList: ElementRef;
  dropdownVisible: boolean = false;
  fixedMenu: boolean = false;
  navigationListWidth: number;
  menuPosition;
  sum: number = 0;
  showDropdown: boolean = false;
  screen: string;

  get showBanner(): boolean {
    return this.bannerService.showBanner;
  }

  constructor(
    private bannerService: BannerService, 
    public modal: ModalService,
    private responsive: ResponsiveService,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.menuPosition = this.menu.nativeElement.offsetTop;
    this.navigationListWidth = this.navigationList.nativeElement.offsetWidth;

    let counter = 1;

    for (let i = 0; i < this.navigationList.nativeElement.children.length; i++) {
      this.sum += this.navigationList.nativeElement.children[i].offsetWidth;

      if (this.sum >= this.navigationListWidth) {
        counter++;
      };
    }

    for (let i = 0; i < counter; i++) {
      this.dropdownList.nativeElement.prepend(this.navigationList.nativeElement.children[this.navigationList.nativeElement.children.length - 1]);
    }
  }

  @HostListener('window:scroll', ['$event']) checkScroll() {
    const windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (windowScroll >= this.menuPosition) {
      this.fixedMenu = true;
    } else if (windowScroll < this.menuPosition) {
      this.fixedMenu = false;
    }
  }

  @HostListener('window:resize', ['$event']) changeNav() {

    this.navigationListWidth = this.navigationList.nativeElement.offsetWidth;

    let counter = 0;
    this.sum = 0;

    for (let i = 0; i < this.navigationList.nativeElement.children.length; i++) {
      this.sum += this.navigationList.nativeElement.children[i].offsetWidth;

      if (this.sum >= this.navigationListWidth) {
        counter++;
      };
    }

    for (let i = 0; i < counter; i++) {
      this.dropdownList.nativeElement.prepend(this.navigationList.nativeElement.children[this.navigationList.nativeElement.children.length - 1]);
    }
    
  }

  showMenu() {
    
  }
}
