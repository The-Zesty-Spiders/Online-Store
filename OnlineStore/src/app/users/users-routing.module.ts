import { RouterModule, Routes } from '@angular/router';

import { AdminManageOrdersComponent } from './admin-manage-orders/admin-manage-orders.component';
import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserOrdersDetailsComponent } from './user-orders-details/user-orders-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes : Routes = [
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
    path: 'ordersdetails',
    component: UserOrdersDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manageorders',
    component: AdminManageOrdersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
