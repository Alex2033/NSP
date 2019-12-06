import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  text: string = '';

  @Output() onAdd: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addComment() {
    if (this.text.trim()) {

      this.onAdd.emit(this.text);

      this.text = '';
    }
  }
}
