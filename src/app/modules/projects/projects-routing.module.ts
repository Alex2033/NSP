import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailComponent} from './components/detail/detail.component';
import {RouteDataResolver} from '../../shared/resolvers/route-data.resolver';


const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent,
    resolve: {
      data: RouteDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
