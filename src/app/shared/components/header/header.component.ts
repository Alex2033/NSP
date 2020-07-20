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
import {ModalService} from '../../services/modal.service';
import {ResponsiveService} from '../../services/responsive.service';
import {MenuService} from '../../services/menu.service';
import {NgScrollbar} from 'ngx-scrollbar';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {Router} from '@angular/router';
import {MenuElement} from '../../contracts/menu-element';
import {Quote} from '../../contracts/quote';
import {ApiService} from '../../services/api.service';
import {HeaderHeightService} from '../../services/header-height.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {ToplineAdvertisingComponent} from '../topline-advertising/topline-advertising.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('headerBottomAnimation', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({'margin-top': '-49px'}),
        animate(200, style({'margin-top': '0'}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({'margin-top': '-49px'}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public now: Date = new Date();
  quote: Quote;
  @ViewChild('header', {static: true}) header: ElementRef;
  @ViewChild('top', {static: true}) top: ElementRef;
  @ViewChild('bottom', {static: false}) bottom: ElementRef;
  @ViewChild('topLineBanner', {static: true}) topLineBanner: ToplineAdvertisingComponent;
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
  sum: number = 0;
  showDropdown: boolean = false;
  screen: string;
  visibleMenuElements = [];
  hiddenMenuElements = [];
  menuElements: MenuElement[] = [];
  searchQuery: string;
  showHiddenSearch: boolean = false;
  scroll = 0;
  topHeaderHeight = 1;
  topLineHeight = 1;
  topLineBannerVisible: boolean;

  constructor(
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

  updateTopLineHeight(value) {
    this.topLineHeight = value;
  }

  ngOnInit() {
    this.api.getHeaderQuote().subscribe(quote => {
      this.quote = quote;
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.topHeaderHeight = this.top.nativeElement.offsetHeight;
          this.updateHeaderHeightValue();
        });
      }
    }, (err) => {
    });
    this.menuService.getGlobalMenu().subscribe((elements) => {
      this.menuElements = elements;
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.rebuildMenu(); // Меню появляется раньше, но уходит за экран, т.к. браузер еще возвращает некорректные значения ширины
        }, 1);
        setTimeout(() => {
          this.rebuildMenu();
        }, 500); // Повторное построние меню
      } else {
        this.rebuildMenu();
      }
    });
  }

  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.topHeaderHeight = this.top.nativeElement.offsetHeight;
        this.updateHeaderHeightValue();
      });
    }

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

  }

  updateHeaderHeightValue() {
    const bottomHeight = this.bottom ? this.bottom.nativeElement.offsetHeight : 0;
    this.headerHeight.setValue(this.top.nativeElement.offsetHeight + this.menu.nativeElement.offsetHeight + bottomHeight);
  }

  @HostListener('window:scroll', ['$event']) checkScroll() {
    const windowScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scroll = windowScroll;
    setTimeout(() => {
      this.updateHeaderHeightValue();
    });
    if (windowScroll >= this.topHeaderHeight) {
      if (!this.fixedMenu) {
        // setTimeout(() => {
        //   this.rebuildMenu();
        // }, 1);
      }
      this.fixedMenu = true;
    } else {
      if (this.fixedMenu) {
        // setTimeout(() => {
        //   this.rebuildMenu();
        // }, 1);
      }
      this.fixedMenu = false;
      this.showHiddenSearch = false;
    }
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.topHeaderHeight = this.top.nativeElement.offsetHeight;
    this.updateHeaderHeightValue();
    setTimeout(() => {
      this.rebuildMenu();
    }, 300);
  }

  rebuildMenu() {
    const navigationListWidth = this.navigationList.nativeElement.clientWidth - 172; // 172 это ширина маленького лого и иконки поиска с отступом
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
        this.visibleMenuElements = this.menuElements.slice(0, indexFrom);
        this.hiddenMenuElements = this.menuElements.slice(indexFrom);
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
    this.searchQuery = '';
  }

  closeDropdown() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.dropdownVisible = false; // Без таймаута не работает переход по внешней ссылке
      }, 1);
    }
  }
}
