import { NgModule } from '@angular/core';

import { CompaniesRoutingModule } from './companies-routing.module';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from '../../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [IndexComponent, DetailComponent],
  imports: [
    SharedModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
