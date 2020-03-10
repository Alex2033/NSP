import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalSubscriptionFormComponent } from './shared/components/modal/modal-subscription-form/modal-subscription-form.component';
import { ModalNewsOfferFormComponent } from './shared/components/modal/modal-news-offer-form/modal-news-offer-form.component';
import { ModalVideoComponent } from './shared/components/modal/modal-video/modal-video.component';
import { ModalLoginComponent } from './shared/components/modal/modal-login/modal-login.component';
import {BrowserModule} from '@angular/platform-browser';
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalSubscriptionFormComponent,
    ModalNewsOfferFormComponent,
    ModalVideoComponent,
    ModalLoginComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'nsp' }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
