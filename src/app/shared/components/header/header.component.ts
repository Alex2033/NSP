import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import {BannerService} from '../banner-data.service';
import {ModalService} from '../../services/modal.service';
import {ResponsiveService} from '../../services/responsive.service';
import {MenuService} from '../../services/menu.service';
import {NgScrollbar} from 'ngx-scrollbar';
import {count} from 'rxjs/operators';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {Router} from '@angular/router';
import {MenuElement} from '../../contracts/menu-element';
import {Quote} from '../../contracts/quote';
import {ApiService} from '../../services/api.service';
import {HeaderHeightService} from '../../services/header-height.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public now: Date = new Date();
  quote: Quote;
  @ViewChild('header', {static: true}) header: ElementRef;
  @ViewChild('menu', {static: true}) menu: ElementRef;
  @ViewChild('navigationContainer', {static: true}) navigationContainer: ElementRef;
  @ViewChild('navigationList', {static: true}) navigationList: ElementRef;
  @ViewChild('tmpNavigationList', {static: true}) tmpNavigationList: ElementRef;
  @ViewChild('dropdownList', {static: true}) dropdownList: ElementRef;
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  @ViewChild('fixedSearchInput', {static: true}) fixedSearchInput: ElementRef;
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar;
  dropdownVisible: boolean = false;
  fixedMenu: boolean = false;
  menuPosition;
  sum: number = 0;
  showDropdown: boolean = false;
  screen: string;
  visibleMenuElements = [];
  hiddenMenuElements = [];
  menuElements: MenuElement[] = [];
  searchQuery: string;
  showHiddenSearch: boolean = false;

  get showBanner(): boolean {
    return this.bannerService.showBanner;
  }

  constructor(
    private bannerService: BannerService,
    public modal: ModalService,
    private responsive: ResponsiveService,
    private menuService: MenuService,
    private router: Router,
    private api: ApiService,
    private headerHeight: HeaderHeightService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.now = new Date();
      }, 1000);
    }
  }

  ngOnInit() {
    this.api.getHeaderQuote().subscribe(quote => {
      this.quote = quote;
    });
    this.menuService.getGlobalMenu().subscribe((elements) => {
      this.menuElements = elements;
      if (isPlatformBrowser(this.platformId)) {
        this.rebuildMenu(); // Меню появляется раньше, но уходит за экран, т.к. браузер еще возвращает некорректные значения ширины
        setTimeout(() => {
          this.rebuildMenu();
        }, 500); // Повторное построние меню
      } else {
        this.rebuildMenu();
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.headerHeight.setValue(this.header.nativeElement.offsetHeight);
    });

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.menuPosition = this.menu.nativeElement.offsetTop;

  }

  @HostListener('window:scroll', ['$event']) checkScroll() {
    const windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (windowScroll >= this.menuPosition) {
      if (!this.fixedMenu) {
        setTimeout(() => {
          this.rebuildMenu();
        }, 1);
      }
      this.fixedMenu = true;
    } else if (windowScroll < this.menuPosition) {
      if (this.fixedMenu) {
        setTimeout(() => {
          this.rebuildMenu();
        }, 1);
      }
      this.fixedMenu = false;
      this.showHiddenSearch = false;
    }
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.rebuildMenu();
    this.headerHeight.setValue(this.header.nativeElement.offsetHeight);
  }

  rebuildMenu() {
    const navigationListWidth = this.navigationContainer.nativeElement.clientWidth;
    let indexFrom = -1;
    let sum = 0;
    if (isPlatformBrowser(this.platformId)) {
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
    } else {
      this.visibleMenuElements = this.menuElements;
    }
  }

  showMenu() {
    this.menuService.openMenu();
  }

  search() {
    this.router.navigate(['/search'], {queryParams: {search: this.searchQuery}});
    this.searchQuery = '';
  }

  showSearch() {
    this.showHiddenSearch = true;
    setTimeout(() => {
      this.fixedSearchInput.nativeElement.focus();
    });
  }

  hideSearch() {
    this.showHiddenSearch = false;
    this.searchInput.nativeElement.value = '';
    this.fixedSearchInput.nativeElement.value = '';
  }
}
