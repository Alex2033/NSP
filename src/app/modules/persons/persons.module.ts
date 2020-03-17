import { NgModule } from '@angular/core';
import { PersonsRoutingModule } from './persons-routing.module';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from '../../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';
import {PersonsResolver} from './resolvers/persons.resolver';


@NgModule({
  declarations: [IndexComponent, DetailComponent],
  imports: [
    SharedModule,
    PersonsRoutingModule
  ],
  providers: [
    PersonsResolver
  ]
})
export class PersonsModule { }
