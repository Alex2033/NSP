import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {DetailComponent} from './components/detail/detail.component';
import {PersonsResolver} from './resolvers/persons.resolver';
import {PersonResolver} from './resolvers/person.resolver';
import {ArticlesResolver} from './resolvers/articles.resolver';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      persons: PersonsResolver,
      articles: ArticlesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: ':person_slug',
    component: DetailComponent,
    resolve: {
      person: PersonResolver,
      articles: ArticlesResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
