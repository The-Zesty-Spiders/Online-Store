import { AlertService } from './../shared/services/alert.service';
import { AuthGuard } from './../guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserOrdersDetailsComponent } from './user-orders-details/user-orders-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { AdminManageOrdersComponent } from './admin-manage-orders/admin-manage-orders.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
  ],
  declarations: [UserRegisterComponent, UserDetailsComponent, UserOrdersDetailsComponent, AdminManageOrdersComponent, ],
  providers: [UsersService, AlertService, AuthGuard]
})
export class UsersModule { }
