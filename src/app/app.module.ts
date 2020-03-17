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
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {ApiService} from './shared/services/api.service';
import {MockApiService} from './shared/services/mock-api.service';
import {HttpClientModule} from '@angular/common/http';
import {ServerDataComponent} from './shared/components/server-data/server-data.component';
import {ServerDataResolver} from './shared/resolvers/server-data.resolver';
import {RouteDataResolver} from './shared/resolvers/route-data.resolver';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalSubscriptionFormComponent,
    ModalNewsOfferFormComponent,
    ModalVideoComponent,
    ModalLoginComponent,
    ServerDataComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'nsp' }),
  ],
  providers: [
    ServerDataResolver,
    RouteDataResolver,
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: ApiService, useClass: environment.useApi ? ApiService : MockApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
