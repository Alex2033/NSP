import {Component, OnInit, ViewChild, AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApartmentComplex} from '../../../../shared/contracts/apartment-complex';
import {ArticleCard} from '../../../../shared/contracts/article-card';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { NgScrollbar } from 'ngx-scrollbar';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar, {static: false}) scrollbarRef: NgScrollbar
  isBrowser = false;
  articles: ArticleCard[] = [];
  screen: string;
  scrollPosition: number = 0;
  showLeftControl: boolean = false;
  showRightControl: boolean = true;

  apartments = [
    {
      image: 'https://images.unsplash.com/photo-1573867607131-872f83689352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam quis risus dignissim dictum. Integer consequat ligula at convallis consequat. Pellentesque convallis venenatis quam eu fermentum.',
      rooms: 1,
      square: 40.40,
      price: '2 950 000',
    },
    {
      image: 'https://images.unsplash.com/photo-1573867607131-872f83689352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam quis risus dignissim dictum. Integer consequat ligula at convallis consequat. Pellentesque convallis venenatis quam eu fermentum.',
      rooms: 2,
      square: 76.10,
      price: '4 200 000',
    },
    {
      image: 'https://images.unsplash.com/photo-1573867607131-872f83689352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in quam quis risus dignissim dictum. Integer consequat ligula at convallis consequat. Pellentesque convallis venenatis quam eu fermentum.',
      rooms: 3,
      square: 89.25,
      price: '5 200 000',
    },
  ];

  images = [
    'https://images.unsplash.com/photo-1504919650220-a884f1ce2c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1555851117-49167a4d285f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1556917731-5bace20a8322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1467842747329-8a4b784e8158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=80',
  ];

  companyCard = {
    logoXl: 'https://images.unsplash.com/photo-1574702256908-ab5f9ff429dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    logoLg: 'https://images.unsplash.com/photo-1574702256908-ab5f9ff429dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    logoMd: 'https://images.unsplash.com/photo-1574702256908-ab5f9ff429dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    logoSm: 'https://images.unsplash.com/photo-1574702256908-ab5f9ff429dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    name: 'ГК «Пионер»',
    text: 'Группа компаний «Пионер»  специализируется на реализации градостроительных проектов многофункциональной и комплексной жилой застройки',
    phone: '+7 (495) 502 95 59',
    email: 'office@pioneer.ru',
    site: 'pioneer.ru',
    activityName: 'Персоны',
  };

  objectCards = [
    {
      type: 'article',
      size: 'small',
      view: 'half'
    },
    {
      type: 'article',
      size: 'small',
      view: 'half'
    },
    {
      type: 'article',
      size: 'small',
      view: 'half'
    },
    {
      type: 'article',
      size: 'small',
      view: 'full'
    },
  ];

  public placemarkProperties = {
    iconCaption: 'ЖК Life-Лесная'
  };


  apartmentComplex: ApartmentComplex;

  constructor(private route: ActivatedRoute, private responsive: ResponsiveService, @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.apartmentComplex = this.route.snapshot.data.content.apartmentComplex;
      this.articles = this.route.snapshot.data.articles.items;
    });
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  ngAfterViewInit() {
    if (this.screen === 'sm') {
      this.scrollbarRef.scrolled.subscribe(e => {
        this.scrollPosition = e.target.scrollLeft;

        if (!this.showRightControl) {
          this.showRightControl = true;
        }

        if (this.scrollPosition > 0) {
          this.showLeftControl = true;
        } else {
          this.showLeftControl = false;
        }
      });
    }
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
  }

  hideRightControl() {
    setTimeout(() => {
      this.showRightControl = false;
    }, 0);
  }

}
