import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectsRoutingModule } from './objects-routing.module';
import { IndexComponent } from './components/index/index.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    ObjectsRoutingModule
  ]
})
export class ObjectsModule { }