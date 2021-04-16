import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ApiService} from '../../services/api.service';
import {Comment} from '../../contracts/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() resourceType: string;
  @Input() resourceId: number;

  startPage = 0;
  paginationLimit = 3;

  comments: Comment[] = [];

  constructor(public auth: AuthService, private api: ApiService) { }

  ngOnInit() {
    this.update();
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 3;
  }

  showLessItems() {
    this.paginationLimit = Number(this.paginationLimit) - 3;
  }

  update() {
    this.api.getComments(this.resourceType, this.resourceId).subscribe((data: any) => {
      this.comments = data.items;
    });
  }

}
