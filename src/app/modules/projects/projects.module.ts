import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
