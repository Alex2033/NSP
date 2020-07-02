import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SocialCallbackComponent} from './components/social-callback/social-callback.component';


const routes: Routes = [
  {
    path: 'social/:provider/callback',
    component: SocialCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
