import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {DetailComponent} from './components/detail/detail.component';
import {ApartmentComplexResolver} from './resolvers/apartment-complex.resolver';
import {ApartmentComplexesResolver} from './resolvers/apartment-complexes.resolver';
import {ArticlesResolver} from './resolvers/articles.resolver';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {
      objects: ApartmentComplexesResolver,
      articles: ArticlesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: ':apartment_complex',
    component: DetailComponent,
    resolve: {
      content: ApartmentComplexResolver,
      articles: ArticlesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectsRoutingModule { }
