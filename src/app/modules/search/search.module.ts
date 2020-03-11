import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
