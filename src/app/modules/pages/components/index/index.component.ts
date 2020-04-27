import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../../shared/contracts/page';
import {Meta, Title} from '@angular/platform-browser';
import {CurrentPageService} from '../../../../shared/services/current-page.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              protected title: Title,
              protected meta: Meta,
              private currentPage: CurrentPageService) {
  }

  data: Page;

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.currentPage.next();
      this.data = data.config.data as Page;
      this.title.setTitle(this.data.metaTitle ? this.data.metaTitle : this.data.title + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.data.metaDescription ? this.data.metaDescription : ''
      }
      );
      this.meta.updateTag({
          name: 'keywords',
          content: this.data.metaKeywords ? this.data.metaKeywords : ''
        }
      );
    });

  }
}
