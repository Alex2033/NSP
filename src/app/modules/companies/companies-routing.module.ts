import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {DetailComponent} from './components/detail/detail.component';
import {CompaniesResolver} from './resolvers/companies.resolver';
import {CompanyResolver} from './resolvers/company.resolver';
import {ArticlesResolver} from './resolvers/articles.resolver';
import {ApartmentComplexesResolver} from './resolvers/apartment-complexes.resolver';


const routes: Routes = [
  {
    path: 'activity/:activity_id',
    component: IndexComponent,
    resolve: {
      companies: CompaniesResolver,
      articles: ArticlesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: '',
    component: IndexComponent,
    resolve: {
      companies: CompaniesResolver,
      articles: ArticlesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: ':company_slug',
    component: DetailComponent,
    resolve: {
      company: CompanyResolver,
      articles: ArticlesResolver,
      apartmentComplexes: ApartmentComplexesResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
