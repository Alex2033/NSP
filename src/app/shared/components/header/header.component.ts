import {Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {BannerService} from '../banner-data.service';
import {ModalService} from '../../services/modal.service';
import {ResponsiveService} from '../../services/responsive.service';
import {MenuService} from '../../services/menu.service';
import {NgScrollbar} from 'ngx-scrollbar';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public now: Date = new Date();

  @ViewChild('menu', {static: true}) menu: ElementRef;
  @ViewChild('navigationContainer', {static: true}) navigationContainer: ElementRef;
  @ViewChild('navigationList', {static: true}) navigationList: ElementRef;
  @ViewChild('tmpNavigationList', {static: true}) tmpNavigationList: ElementRef;
  @ViewChild('dropdownList', {static: true}) dropdownList: ElementRef;
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar;
  dropdownVisible: boolean = false;
  fixedMenu: boolean = false;
  menuPosition;
  sum: number = 0;
  showDropdown: boolean = false;
  screen: string;
  scrollPosition: number = 0;
  showLeftControl: boolean = false;
  visibleMenuElements = [];
  hiddenMenuElements = [];
  menuElements = [
    {
      name: 'Search',
      slug: 'search',
      highlight: false
    },
    {
      name: 'Companies index',
      slug: 'companies',
      highlight: false
    },
    {
      name: 'Companies detail',
      slug: 'companies/detail',
      highlight: false
    },
    {
      name: 'Article',
      slug: 'article',
      highlight: false
    },
    {
      name: 'Quotes',
      slug: 'quotes',
      highlight: false
    },
    {
      name: 'Persons index',
      slug: 'persons',
      highlight: false
    },
    {
      name: 'Persons detail',
      slug: 'persons/detail',
      highlight: false
    },
    {
      name: 'Event',
      slug: 'event',
      highlight: false
    },
    {
      name: 'Objects index',
      slug: 'objects',
      highlight: false
    },
    {
      name: 'Objects detail',
      slug: 'objects/detail',
      highlight: false
    },
    {
      name: 'Sections detail',
      slug: 'sections/detail',
      highlight: false
    },
    {
      name: 'Projects detail',
      slug: 'projects/detail',
      highlight: false
    },
  ];

  get showBanner(): boolean {
    return this.bannerService.showBanner;
  }

  constructor(
    private bannerService: BannerService,
    public modal: ModalService,
    private responsive: ResponsiveService,
    private menuService: MenuService
  ) {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.menuPosition = this.menu.nativeElement.offsetTop;
  }

  ngAfterViewInit() {
    this.rebuildMenu();
    if (this.screen === 'sm') {
      this.scrollbarRef.scrolled.subscribe(e => {
        this.scrollPosition = e.target.scrollLeft;

        if (this.scrollPosition > 0) {
          this.showLeftControl = true;
        } else {
          this.showLeftControl = false;
        }
      });
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
    this.rebuildMenu();
  }

  rebuildMenu() {
    const navigationListWidth = this.navigationContainer.nativeElement.clientWidth;
    let indexFrom = -1;
    let sum = 0;
    setTimeout(() => { // Чтобы меню успело привязаться к DOM дереву
      for (let i = 0; i < this.tmpNavigationList.nativeElement.children.length; i++) {
        sum += this.tmpNavigationList.nativeElement.children[i].offsetWidth;
        if (sum >= navigationListWidth && indexFrom === -1) {
          indexFrom = i;
        }
      }
      if (indexFrom !== -1) {
        this.visibleMenuElements = this.menuElements.slice(0, indexFrom - 1);
        this.hiddenMenuElements = this.menuElements.slice(indexFrom - 1);
      } else {
        this.visibleMenuElements = this.menuElements;
        this.hiddenMenuElements = [];
      }
    });
  }

  showMenu() {
    this.menuService.openMenu();
  }
}
