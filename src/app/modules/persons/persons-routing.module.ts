import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {DetailComponent} from './components/detail/detail.component';
import {PersonsResolver} from './resolvers/persons.resolver';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      persons: PersonsResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: 'detail',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
