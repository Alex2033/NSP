import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { CommentsListComponent } from '../comments-list/comments-list.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @ViewChild(CommentsListComponent) commentsList: CommentsListComponent;
  @Input() resourceType: string;
  @Input() resourceId: number;
  constructor() { }

  ngOnInit() {
  }

  updateComments() {
    this.commentsList.update();
  }


}
