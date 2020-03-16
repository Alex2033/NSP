import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  screen: string;

  companies = [ 
    { image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', title: 'БестЪ. Коммерческая недвижимость', phone: '+7 (812) 380–03–55', site: 'bestgroup.ru', tag: 'Агентство недвижимости' }, 
    { image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', title: 'Комплекс апарт-отелей VALO', phone: '+7 (812) 411–00–00', site: 'valoapart.ru', tag: 'Агентство недвижимости' }, 
    { image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', title: 'ООО ИСК Отделстрой', phone: '+7 (812) 596-59-70', site: 'otdelstroy.spb.ru', tag: 'Экспертиза' }, 
    { image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', title: 'Группа ЦДС', phone: '+7 (812) 320–12–00', site: 'cds.spb.ru', tag: 'Строительные материалы/технологии' }, 
  ];

  selectConfig = {
    name: 'Вид деятельности',
    options: [
      'Вариант 1',
      'Вариант 2',
      'Вариант 3'
    ]
  };

  constructor(private responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
