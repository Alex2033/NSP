import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {DetailComponent} from './components/detail/detail.component';
import {CompaniesResolver} from './resolvers/companies.resolver';


const routes: Routes = [
  {
    path: 'activity/:activity_id',
    component: IndexComponent,
    resolve: {
      companies: CompaniesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: '',
    component: IndexComponent,
    resolve: {
      companies: CompaniesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: ':company_id-:company_slug',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
