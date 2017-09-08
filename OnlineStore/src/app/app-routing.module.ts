import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {AuthGuard} from './users/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './users/user-login/login.component';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'glasses',
    loadChildren: './glasses/glasses.module#GlassesModule'
  },
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: '**',
    component: NotfoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
