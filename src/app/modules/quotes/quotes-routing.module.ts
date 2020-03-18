import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {QuotesResolver} from './resolvers/quotes.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      quotes: QuotesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
