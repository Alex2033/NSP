import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(protected title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Страница не найдена' + ' - NSP.ru');
  }

}
