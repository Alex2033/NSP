import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../../shared/contracts/page';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              protected title: Title,
              protected meta: Meta) { }
  data: Page;
  ngOnInit(): void {
    this.data = this.route.snapshot.data.data as Page;
    this.title.setTitle(this.data.metaTitle ? this.data.metaTitle : this.data.title + ' - NSP.ru');
    this.meta.updateTag({
        name: 'description',
        content: this.data.metaDescription
      }
    );
    this.meta.updateTag({
        name: 'keywords',
        content: this.data.metaKeywords
      }
    );
  }
}
