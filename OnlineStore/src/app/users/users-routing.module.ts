import { RouterModule, Routes } from '@angular/router';

import { AdminManageOrdersComponent } from './admin-manage-orders/admin-manage-orders.component';
import { AuthGuard } from './guards/auth.guard';
import {LoginComponent} from './user-login/login.component';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserOrdersDetailsComponent } from './user-orders-details/user-orders-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {
    path: 'createuser',
    component: UserRegisterComponent
  },
  {
    path: 'details',
    component: UserDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'viewOrders',
    component: ViewOrdersComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
