import { NgModule } from '@angular/core';

import { ObjectsRoutingModule } from './objects-routing.module';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from '../../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';
import {ApartmentComplexResolver} from './components/resolvers/apartment-complex.resolver';


@NgModule({
  declarations: [IndexComponent, DetailComponent],
  imports: [
    SharedModule,
    ObjectsRoutingModule
  ],
  providers: [
    ApartmentComplexResolver
  ]
})
export class ObjectsModule { }
