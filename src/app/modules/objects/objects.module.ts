import { NgModule } from '@angular/core';

import { ObjectsRoutingModule } from './objects-routing.module';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from '../../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';
import {ApartmentComplexResolver} from './resolvers/apartment-complex.resolver';
import {ApartmentComplexesResolver} from './resolvers/apartment-complexes.resolver';
import {ArticlesResolver} from './resolvers/articles.resolver';


@NgModule({
  declarations: [IndexComponent, DetailComponent],
  imports: [
    SharedModule,
    ObjectsRoutingModule
  ],
  providers: [
    ApartmentComplexResolver,
    ApartmentComplexesResolver,
    ArticlesResolver
  ]
})
export class ObjectsModule { }
