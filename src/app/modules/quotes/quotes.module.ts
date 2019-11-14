import { NgModule } from '@angular/core';

import { QuotesRoutingModule } from './quotes-routing.module';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    QuotesRoutingModule
  ]
})
export class QuotesModule { }
