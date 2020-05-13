import {AfterViewInit, Component, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import { ResizableCardComponent } from '../resizable-card.component';
import {AdvertisingCard} from '../../../contracts/advertising-card';
import {ApiService} from '../../../services/api.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-advertising-card',
  templateUrl: './advertising-card.component.html',
  styleUrls: ['./advertising-card.component.scss']
})
export class AdvertisingCardComponent extends ResizableCardComponent implements OnInit, AfterViewInit {

  constructor(private api: ApiService, @Inject(PLATFORM_ID) private platformId: any) {
    super();
  }

  clicked = false;
  viewed = false;
  @Input() data: AdvertisingCard;
  @ViewChild('banner') banner;
  @ViewChild('htmlXlWrapper') htmlXlWrapper;
  @ViewChild('htmlLgWrapper') htmlLgWrapper;
  @ViewChild('htmlMdWrapper') htmlMdWrapper;
  @ViewChild('htmlSmWrapper') htmlSmWrapper;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.onScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Проверка, что до нижней границы списка стетей осталось менее Х пикселей
    if (isPlatformBrowser(this.platformId)) {
      if (!this.viewed && this.data) {
        this.checkView();
      }
    }
  }

  checkView() {
    const distance = this.banner.nativeElement.getBoundingClientRect();
    if (distance.top < window.innerHeight && distance.bottom > 0) {
      this.viewed = true;
      this.api.addAdvertisingCardView(this.data.id).subscribe();
    }
  }

  incClick() {
    if (!this.clicked) {
      this.clicked = true;
      this.api.addAdvertisingCardClick(this.data.id).subscribe();
    }
  }
}
