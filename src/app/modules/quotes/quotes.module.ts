import { NgModule } from '@angular/core';

import { QuotesRoutingModule } from './quotes-routing.module';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from '../../shared/shared.module';
import {QuotesResolver} from './resolvers/quotes.resolver';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    QuotesRoutingModule
  ],
  providers: [
    QuotesResolver
  ]
})
export class QuotesModule { }
