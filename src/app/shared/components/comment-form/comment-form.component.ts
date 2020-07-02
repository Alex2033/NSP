import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';
import {AuthService} from '../../services/auth.service';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  text = '';
  screen: string;

  @Output() add: EventEmitter<any> = new EventEmitter();
  @Input() resourceType: string;
  @Input() resourceId: number;

  constructor(private responsive: ResponsiveService, public auth: AuthService, private api: ApiService) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  get textValue() {
    return this.text.trim();
  }
  addComment() {
    if (this.textValue) {
      this.auth.signIn().subscribe(result => {
        if (result) {
          this.api.addComment(this.resourceType, this.resourceId, this.text).subscribe(() => {
            this.add.emit(this.text);
          });
          this.text = '';
        }
      });
    }
  }
}
