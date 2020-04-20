import {Component, OnInit, Input, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-location-block',
  templateUrl: './location-block.component.html',
  styleUrls: ['./location-block.component.scss']
})
export class LocationBlockComponent implements OnInit {

  @Input() data;
  isBrowser = false;
  public placemarkProperties = {
    iconCaption: 'Апарт-комплекс Valo'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    this.placemarkProperties.iconCaption = this.data.name;
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
  }

}
