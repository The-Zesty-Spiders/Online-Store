import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UserRegisterComponent],
  providers: [UsersService]
})
export class UsersModule { }
