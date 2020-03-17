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
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TextComponent } from './components/controls/text/text.component';
import { TextareaComponent } from './components/controls/textarea/textarea.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { ErrorMessageComponent } from './components/controls/shared/error-message/error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonCardComponent } from './components/cards/person-card/person-card.component';
import { CompanyCardComponent } from './components/cards/company-card/company-card.component';
import { ObjectCardComponent } from './components/cards/object-card/object-card.component';
import { ExtendedPersonCardComponent } from './components/extended-cards/extended-person-card/extended-person-card.component';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { SearchComponent } from './components/search/search.component';
import { QuoteBlockComponent } from './components/blocks/quote-block/quote-block.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewsSliderComponent } from './components/news-slider/news-slider.component';
import { ArticleComponent } from './components/article/article.component';
import { CategoryCardCarouselComponent } from './components/category-card-carousel/category-card-carousel.component';
import { ShareComponent } from './components/share/share.component';
import { TextBlockComponent } from './components/blocks/text-block/text-block.component';
import { ImageBlockComponent } from './components/blocks/image-block/image-block.component';
import { VideoBlockComponent } from './components/blocks/video-block/video-block.component';
import { ImageCarouselBlockComponent } from './components/blocks/image-carousel-block/image-carousel-block.component';
import { LocationBlockComponent } from './components/blocks/location-block/location-block.component';
import { CommentsComponent } from './components/comments/comments.component';
import { EventComponent } from './components/event/event.component';
import { BlockLayoutComponent } from './components/block-layout/block-layout.component';
import { ExtendedCompanyCardComponent } from './components/extended-cards/extended-company-card/extended-company-card.component';
import { TabsCardCarouselComponent } from './components/tabs-card-carousel/tabs-card-carousel.component';
import { CompanyCarouselBlockComponent } from './components/blocks/company-carousel-block/company-carousel-block.component';
import { EventRegistrationBlockComponent } from './components/blocks/event-registration-block/event-registration-block.component';
import { FullWidthImageCarouselBlockComponent } from './components/blocks/full-width-image-carousel-block/full-width-image-carousel-block.component';
import { ApartmentInfoBlockComponent } from './components/blocks/apartment-info-block/apartment-info-block.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';
import { SelectComponent } from './components/controls/select/select.component';
import {ResponsiveImageComponent} from './components/responsive-image/responsive-image.component';
import {ParagraphsPipe} from './pipes/paragraphs.pipe';
import { DomainPipe } from './pipes/domain.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { MobileCardsSliderComponent } from './components/mobile-cards-slider/mobile-cards-slider.component';
import { EditorContentComponent } from './components/editor-content/editor-content.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 8
};

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
    ClickOutsideDirective,
    TextComponent,
    TextareaComponent,
    CheckboxComponent,
    ErrorMessageComponent,
    PersonCardComponent,
    CompanyCardComponent,
    ObjectCardComponent,
    ExtendedPersonCardComponent,
    PhoneFormatPipe,
    SearchComponent,
    QuoteBlockComponent,
    PaginationComponent,
    MapComponent,
    SliderComponent,
    NewsSliderComponent,
    ArticleComponent,
    CategoryCardCarouselComponent,
    ShareComponent,
    TextBlockComponent,
    ImageBlockComponent,
    VideoBlockComponent,
    ImageCarouselBlockComponent,
    LocationBlockComponent,
    CommentsComponent,
    EventComponent,
    BlockLayoutComponent,
    ExtendedCompanyCardComponent,
    TabsCardCarouselComponent,
    CompanyCarouselBlockComponent,
    EventRegistrationBlockComponent,
    FullWidthImageCarouselBlockComponent,
    ApartmentInfoBlockComponent,
    CommentsListComponent,
    CommentComponent,
    CommentFormComponent,
    SelectComponent,
    ResponsiveImageComponent,
    ParagraphsPipe,
    DomainPipe,
    MenuComponent,
    MobileCardsSliderComponent,
    EditorContentComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularYandexMapsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgScrollbarModule,
    NgScrollbarReachedModule,
    LazyLoadImageModule
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
    ClickOutsideDirective,
    FrontCardComponent,
    TextComponent,
    TextareaComponent,
    CheckboxComponent,
    ErrorMessageComponent,
    FormsModule,
    ReactiveFormsModule,
    PersonCardComponent,
    CompanyCardComponent,
    ObjectCardComponent,
    ExtendedPersonCardComponent,
    PhoneFormatPipe,
    SearchComponent,
    QuoteBlockComponent,
    PaginationComponent,
    RouterModule,
    MapComponent,
    ShareComponent,
    SliderComponent,
    NewsSliderComponent,
    ArticleComponent,
    BlockLayoutComponent,
    ExtendedCompanyCardComponent,
    TabsCardCarouselComponent,
    FullWidthImageCarouselBlockComponent,
    ApartmentInfoBlockComponent,
    CommentsListComponent,
    CommentComponent,
    CommentFormComponent,
    AngularYandexMapsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgScrollbarModule,
    NgScrollbarReachedModule,
    SelectComponent,
    ResponsiveImageComponent,
    ParagraphsPipe,
    DomainPipe,
    MenuComponent,
    MobileCardsSliderComponent,
    EditorContentComponent,
    LazyLoadImageModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SharedModule { }
