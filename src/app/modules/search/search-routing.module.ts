import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {SearchResultsResolver} from './resolvers/search-results.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      results: SearchResultsResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
