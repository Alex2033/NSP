import { NgModule } from '@angular/core';

import { CompaniesRoutingModule } from './companies-routing.module';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from '../../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';
import {CompaniesResolver} from './resolvers/companies.resolver';


@NgModule({
  declarations: [IndexComponent, DetailComponent],
  imports: [
    SharedModule,
    CompaniesRoutingModule
  ],
  providers: [
    CompaniesResolver
  ]
})
export class CompaniesModule { }
