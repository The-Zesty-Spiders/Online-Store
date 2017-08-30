import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
// import { ApiService } from './services/api.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NavComponent, FooterComponent],
  providers: []
})
export class SharedModule { }
