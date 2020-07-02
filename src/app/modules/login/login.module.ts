import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { SocialCallbackComponent } from './components/social-callback/social-callback.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [SocialCallbackComponent],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
