import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  private pagesCount: number;
  private _size: number;
  @Input()
  set size(value: number) {
    this._size = value;
    this.calculatePagesCount();
  };

  get size() {
    return this._size;
  }

  private _count: number;
  @Input()
  set count(value: number) {
    this._count = value;
    this.calculatePagesCount();
  }

  get count() {
    return this._count;
  }

  current: number;

  constructor(private route: ActivatedRoute) {
  }

  prepareParams(page: number) {
    return {
      ...this.route.snapshot.queryParams,
      ...{
        page
      }
    };
  }

  calculatePagesCount() {
    this.pagesCount = Math.ceil(this.count / this.size);
    this.checkCurrentPage();
  }

  checkCurrentPage() {
    // if(this.current > this.pagesCount) {
    //   this.response.notFound();
    // }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.page) {
        this.current = parseInt(params.page, 10);
        this.checkCurrentPage();
      } else {
        this.current = 1;
      }
    });
  }

  get pages() {
    let start;
    if (this.current < 3) {
      start = 1;
    } else if (this.current > (this.pagesCount - 2)) {
      start = this.pagesCount - 4;
    } else {
      start = this.current - 2;
    }
    if (start < 1) {
      start = 1;
    }
    const end = Math.min(start + 4, this.pagesCount);
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
}
