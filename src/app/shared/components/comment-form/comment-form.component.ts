import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  text: string = '';
  screen: string;

  @Output() onAdd: EventEmitter<any> = new EventEmitter();

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  addComment() {
    if (this.text.trim()) {

      this.onAdd.emit(this.text);

      this.text = '';
    }
  }
}
