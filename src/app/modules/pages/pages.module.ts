import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
})
export class PagesModule { }
