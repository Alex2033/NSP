import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment;

  counter: number = 22;

  constructor() { }

  ngOnInit() {
  }

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }

}
