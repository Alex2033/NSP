import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    SharedModule,
    SectionsRoutingModule
  ]
})
export class SectionsModule { }
