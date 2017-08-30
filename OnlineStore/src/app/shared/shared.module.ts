import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NavComponent, FooterComponent],
  providers: [ApiService, AuthenticationService]
})
export class SharedModule { }
