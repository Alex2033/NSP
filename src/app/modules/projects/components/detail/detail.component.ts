import {AfterViewInit, Component, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {ResponsiveService} from 'src/app/shared/services/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../../shared/contracts/project';
import {Meta, Title} from '@angular/platform-browser';
import {NgScrollbar} from 'ngx-scrollbar';
import {MenuService} from '../../../../shared/services/menu.service';
import {MenuElement} from '../../../../shared/contracts/menu-element';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {ApiService} from '../../../../shared/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar;

  screen: string;
  scrollPosition = 0;
  showLeftControl = false;
  showRightControl = true;
  menu: MenuElement[] = [];
  project: Project;
  onlyFixed = false;
  loadingLayouts = [];
  start = null;
  constructor(
    private menuService: MenuService,
    public responsive: ResponsiveService,
    private route: ActivatedRoute,
    protected title: Title,
    private api: ApiService,
    @Inject(PLATFORM_ID) private platformId: any,
    protected meta: Meta) {
  }

  ngOnInit() {
    this.start = new Date().getTime();
    this.route.data.subscribe((data) => {
      this.loadingLayouts = [];
      this.onlyFixed = this.route.snapshot.queryParams.fixed !== undefined;
      this.project = data.config.data as Project;
      this.project.collections.map(collection => {
        collection.slug = collection.slug;
      });
      this.menuService.setProjectMenuElements(data.config.menu);
      this.menu = this.menuService.getProjectMenu();
      this.title.setTitle(this.project.metaTitle ? this.project.metaTitle : this.project.title + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.project.metaDescription ? this.project.metaDescription : ''
        }
      );
      this.meta.updateTag({
          name: 'keywords',
          content: this.project.metaKeywords ? this.project.metaKeywords : ''
        }
      );
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
      if (!this.project.layout[screen] && this.loadingLayouts.indexOf(screen) === -1) {
        this.loadingLayouts.push(screen);
        this.api.getProjectLayout(this.project.id, screen).subscribe(data => {
          this.project.layout[screen] = data.layout;
          this.loadingLayouts = this.loadingLayouts.filter(x => x !== screen);
        });
        // Загрузка сетки под другое разрешение
      }
    });
  }

  ngAfterViewInit() {
    console.log('full load ' + this.start, new Date().getTime() - this.start);
    this.scrollbarRef.scrolled.subscribe(e => {
      this.scrollPosition = e.target.scrollLeft;

      if (!this.showRightControl) {
        this.showRightControl = true;
      }

      if (this.scrollPosition > 0) {
        this.showLeftControl = true;
      } else {
        this.showLeftControl = false;
      }
    });
  }

  hideRightControl() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.showRightControl = false;
      }, 0);
    }
  }
}
