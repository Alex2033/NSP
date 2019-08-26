import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialCardComponent } from './components/cards/material-card/material-card.component';
import { VideoCardComponent } from './components/cards/video-card/video-card.component';
import { AdvertisingCardComponent } from './components/cards/advertising-card/advertising-card.component';
import { LatestNewsCardComponent } from './components/cards/latest-news-card/latest-news-card.component';
import { MaterialListCardComponent } from './components/cards/material-list-card/material-list-card.component';
import { CardLayoutComponent } from './components/card-layout/card-layout.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { ToplineAdvertisingComponent } from './components/topline-advertising/topline-advertising.component';
import { FrontCardComponent } from './components/cards/front-card/front-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MaterialCardComponent,
    VideoCardComponent,
    AdvertisingCardComponent,
    LatestNewsCardComponent,
    MaterialListCardComponent,
    CardLayoutComponent,
    CardCarouselComponent,
    ToplineAdvertisingComponent,
    FrontCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MaterialCardComponent,
    VideoCardComponent,
    AdvertisingCardComponent,
    LatestNewsCardComponent,
    MaterialListCardComponent,
    CardLayoutComponent,
    CardCarouselComponent,
    ToplineAdvertisingComponent,
    FrontCardComponent
  ]
})
export class SharedModule { }
