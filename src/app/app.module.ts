import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalSubscriptionFormComponent } from './shared/components/modal/modal-subscription-form/modal-subscription-form.component';
import { ModalNewsOfferFormComponent } from './shared/components/modal/modal-news-offer-form/modal-news-offer-form.component';
import { ModalVideoComponent } from './shared/components/modal/modal-video/modal-video.component';
import { ModalLoginComponent } from './shared/components/modal/modal-login/modal-login.component';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {ApiService} from './shared/services/api.service';
import {MockApiService} from './shared/services/mock-api.service';
import {HttpClientModule} from '@angular/common/http';
import {ServerDataComponent} from './shared/components/server-data/server-data.component';
import {ServerDataResolver} from './shared/resolvers/server-data.resolver';
import {RouteDataResolver} from './shared/resolvers/route-data.resolver';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ModalGalleryComponent} from './shared/components/modal/modal-gallery/modal-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalSubscriptionFormComponent,
    ModalNewsOfferFormComponent,
    ModalVideoComponent,
    ModalLoginComponent,
    ModalGalleryComponent,
    ServerDataComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'nsp' }),
  ],
  providers: [
    ServerDataResolver,
    RouteDataResolver,
    { provide: ApiService, useClass: environment.useApi ? ApiService : MockApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
