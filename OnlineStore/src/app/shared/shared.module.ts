import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { PropertyFormatPipe } from './pipes/property-format.pipe';
import { ApiServices } from './services/api.services';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [DateFormatPipe, PropertyFormatPipe],
  // [NavComponent
  // TODO enable later and remove the footerC, navC, and Api service
  providers: [ApiServices],
  exports: [DateFormatPipe, PropertyFormatPipe]
})
export class SharedModule { }
