import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../../shared/contracts/project';
import {Meta, Title} from '@angular/platform-browser';
import { NgScrollbar } from 'ngx-scrollbar';
import {MenuService} from '../../../../shared/services/menu.service';
import {MenuElement} from '../../../../shared/contracts/menu-element';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar;

  screen: string;
  scrollPosition: number = 0;
  showLeftControl: boolean = false;
  showRightControl: boolean = true;
  menu: MenuElement[] = [];
  project: Project;

  constructor(
    private menuService: MenuService,
    public responsive: ResponsiveService,
    private route: ActivatedRoute,
    protected title: Title,
    protected meta: Meta) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.project = data.config.data as Project;
      this.menuService.setProjectMenuElements(data.config.menu);
      this.menu = this.menuService.getProjectMenu();
      this.title.setTitle(this.project.metaTitle ? this.project.metaTitle : this.project.title + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.project.metaDescription
        }
      );
      this.meta.updateTag({
          name: 'keywords',
          content: this.project.metaKeywords
        }
      );
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  ngAfterViewInit() {
    if (this.screen === 'sm' && this.scrollbarRef) {
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
  }

  hideRightControl() {
    setTimeout(() => {
      this.showRightControl = false;
    }, 0);
  }

}
