import { AdminManageOrdersComponent } from './admin-manage-orders/admin-manage-orders.component';
import { ApiServices } from './../shared/services/api.services';
import { AuthGuard } from './guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user-login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserOrdersDetailsComponent } from './user-orders-details/user-orders-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    UserRegisterComponent,
    UserDetailsComponent,
    UserOrdersDetailsComponent,
    AdminManageOrdersComponent,
    LoginComponent
  ],
  providers: [UsersService, AuthGuard, ApiServices]
})
export class UsersModule { }
