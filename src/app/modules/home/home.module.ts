import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
