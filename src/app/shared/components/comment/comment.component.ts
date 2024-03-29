import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import {Comment} from '../../contracts/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  screen: string;
  // counter: number = 22;

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  // increaseCounter() {
  //   this.counter++;
  // }
  //
  // decreaseCounter() {
  //   this.counter--;
  // }

}
