import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import {ActivatedRoute} from '@angular/router';
import {Company} from '../../../../shared/contracts/company';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  screen: string;

  objectCards = [
    {
      type: 'object',
      objectConfig: {
        image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        title: 'ЖК «Новое купчино»',
        geolocation: 'Василеостровский район',
        url: '/'
      }
    },
    {
      type: 'object',
      objectConfig: {
        image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        title: 'ЖК «Новое купчино»',
        geolocation: 'Василеостровский район',
        url: '/'
      }
    },
    {
      type: 'object',
      objectConfig: {
        image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        title: 'ЖК «Новое купчино»',
        geolocation: 'Василеостровский район',
        url: '/'
      }
    },
    {
      type: 'object',
      objectConfig: {
        image: 'https://images.unsplash.com/photo-1556834948-113a097c00eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        title: 'ЖК «Новое купчино»',
        geolocation: 'Василеостровский район',
        url: '/'
      }
    }
  ];

  materialCards = [
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    },
    {
      type: 'material',
      size: 'small',
      view: 'default'
    }
  ];

  public placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: 'assets/images/icons/map_pin-red.svg',
    iconImageSize: [32, 40]
  };

  company: Company;

  constructor(private responsive: ResponsiveService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    this.route.data.subscribe(data => {
      this.company = data.company;
      console.log(this.company);
    });
  }

}
