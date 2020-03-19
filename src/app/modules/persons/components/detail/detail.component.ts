import {Component, OnInit} from '@angular/core';
import {Company} from '../../../../shared/contracts/company';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../../../../shared/contracts/person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  screen: string;

  cards = [
    {
      type: 'material',
      size: 'small',
      view: 'half'
    },
    {
      type: 'material',
      size: 'small',
      view: 'half'
    },
    {
      type: 'material',
      size: 'small',
      view: 'half'
    },
    {
      type: 'video',
      size: 'medium-vertical',
    },
    {
      type: 'advertising',
      size: 'small'
    },
    {
      type: 'material',
      size: 'small',
      view: 'half'
    },
    {
      type: 'material',
      size: 'small',
      view: 'full'
    }
  ];

  person: Person;
  company: Company;

  constructor(
    private responsive: ResponsiveService,
    private route: ActivatedRoute,
    protected title: Title,
    protected meta: Meta) {
  }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
    this.route.data.subscribe(data => {
      this.person = data.person.data;
      this.company = data.person.company;
      this.title.setTitle(this.person.name + ' - Информация о персоне ' + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.person.description
        }
      );
    });
  }

}
