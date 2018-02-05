import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {FrontComponent} from './front/front.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UploadComponent} from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'front',
    component: FrontComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
