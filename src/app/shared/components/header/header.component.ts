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
  @ViewChild('dropdownList', {static: true}) dropdownList: ElementRef;
  dropdownVisible: boolean = false;
  fixedMenu: boolean = false;
  navigationListWidth: number;
  menuPosition;
  sum: number = 0;
  showDropdown: boolean = false;

  get showBanner(): boolean {
    return this.bannerService.showBanner;
  }

  constructor(private bannerService: BannerService, public modal: ModalService) {}

  ngOnInit() {
    this.menuPosition = this.menu.nativeElement.offsetTop;
    this.navigationListWidth = this.navigationList.nativeElement.offsetWidth;

    // let counter = 1;

    // for (let i = 0; i < this.navigationList.nativeElement.children.length; i++) {
    //   this.sum += this.navigationList.nativeElement.children[i].offsetWidth;

    //   if (this.sum >= this.navigationListWidth) counter++;
    // }

    // for (let i = 0; i < counter; i++) {
    //   // this.dropdownList.nativeElement.appendChild(this.navigationList.nativeElement.children[this.navigationList.nativeElement.children.length - 2]);
    //   this.navigationList.nativeElement.children[this.navigationList.nativeElement.children.length - 2].remove(); // т.к. кнопка Еще не удаляется
    //   console.log('Cycle');
    // }

    // if (this.sum >= this.navigationListWidth) { // Для отображения кнопки Еще
    //   this.showDropdown = true;
    // } else {
    //   this.showDropdown = false;
    // }
  }

  @HostListener('window:scroll', ['$event']) checkScroll() {
    const windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (windowScroll >= this.menuPosition) {
      this.fixedMenu = true;
    } else if (windowScroll < this.menuPosition) {
      this.fixedMenu = false;
    }
  }

  // @HostListener('window:resize', ['$event']) changeNav() {
  //   let counter = 1;
  //
  //   for (let i = 0; i < this.navigationList.nativeElement.children.length; i++) {
  //     this.sum += this.navigationList.nativeElement.children[i].offsetWidth;
  //
  //     if (this.sum >= this.navigationListWidth) counter++;
  //   }
  //
  //   for (let i = 0; i < counter; i++) {
  //     this.navigationList.nativeElement.children[this.navigationList.nativeElement.children.length - 2].remove(); // т.к. кнопка Еще не удаляется
  //     console.log('Cycle');
  //   }
  //
  //   if (this.sum >= this.navigationListWidth) { // Для отображения кнопки Еще
  //     this.showDropdown = true;
  //   } else {
  //     this.showDropdown = false;
  //   }
  // }

}
