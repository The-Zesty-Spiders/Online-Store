import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path: 'createUser',
    component: UserRegisterComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
