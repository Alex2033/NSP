import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {DetailComponent} from './components/detail/detail.component';
import {ApartmentComplexResolver} from './components/resolvers/apartment-complex.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: ':apartment_complex',
    component: DetailComponent,
    resolve: {
      content: ApartmentComplexResolver
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectsRoutingModule { }
