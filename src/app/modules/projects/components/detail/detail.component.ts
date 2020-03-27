import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../../shared/contracts/page';
import {Project} from '../../../../shared/contracts/project';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  screen: string;

  config = [
    {
      subtopic: 'Все',
      cards: [0, 1, 2, 3, 4, 5]
    },
    {
      subtopic: 'Подтема 1',
      cards: [0, 1, 2]
    },
    {
      subtopic: 'Подтема 2',
      cards: [0, 1]
    },
  ];

  news = [
    {
      header: 'Новости долевки',
      slides: [
        '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
        'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
        'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
        'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
        'В Думе рассматривают возможность платить за будущую квартиру в новостройке в рассрочку',
        'Сбербанк поможет частным инвесторам вкладывать средства в строительство',
        'Объём просроченной ипотечной задолженности вырос по итогам полугодия',
        '«ФНС подала иск о банкротстве застройщика малоэтажного ЖК «Черничная поляна»',
      ]
    },
  ];

  project: Project;

  constructor(
    public responsive: ResponsiveService,
    private route: ActivatedRoute,
    protected title: Title,
    protected meta: Meta) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.project = data.data as Project;
      this.title.setTitle(this.project.metaTitle ? this.project.metaTitle : this.project.title + ' - NSP.ru');
      this.meta.updateTag({
          name: 'description',
          content: this.project.metaDescription
        }
      );
      this.meta.updateTag({
          name: 'keywords',
          content: this.project.metaKeywords
        }
      );
    });
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
