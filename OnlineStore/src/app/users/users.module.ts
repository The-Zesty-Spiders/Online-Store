import { AuthGuard } from './guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user-login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UserRegisterComponent,
    UserDetailsComponent,
    LoginComponent,
    ViewOrdersComponent
  ],
  providers: [UsersService, AuthGuard]
})
export class UsersModule { }
