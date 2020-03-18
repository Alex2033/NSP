import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search-routing.module';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../../shared/shared.module';
import {SearchResultsResolver} from './resolvers/search-results.resolver';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    SearchRoutingModule
  ],
  providers: [
    SearchResultsResolver
  ]
})
export class SearchModule { }
