import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {RouteDataResolver} from '../../shared/resolvers/route-data.resolver';


const routes: Routes = [
  {
    path: 'detail',
    component: IndexComponent,
    resolve: {
      data: RouteDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
