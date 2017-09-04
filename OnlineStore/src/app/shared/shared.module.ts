import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ApiService } from './services/api.service';


// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NavComponent, FooterComponent],
  providers: []
})
export class SharedModule { }
