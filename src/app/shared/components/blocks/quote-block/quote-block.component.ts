import {Component, Input, OnInit} from '@angular/core';
import {Quote} from '../../../contracts/quote';

@Component({
  selector: 'app-quote-block',
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.scss']
})
export class QuoteBlockComponent implements OnInit {
  @Input() quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}
