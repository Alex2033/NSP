import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentsListComponent } from '../comments-list/comments-list.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @ViewChild(CommentsListComponent, {static: false}) commentsList: CommentsListComponent;

  filters = [
    {
      text: 'Популярные',
      viewComments: 'popular'
    },
    {
      text: 'По порядку',
      viewComments: 'order'
    }
  ];

  activeFilter: number = 0;
  viewComments: string = 'popular';

  constructor() { }

  ngOnInit() {
  }

  updateComments(text) {
    this.commentsList.addComment(text);
  }
  

}
