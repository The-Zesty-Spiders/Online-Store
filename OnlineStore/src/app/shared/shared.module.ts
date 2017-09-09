import { ApiServices } from './services/api.services';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DropdownDirective } from './directives/dropdown.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './notfound/notfound.component';
import { PropertyFormatPipe } from './pipes/property-format.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DateFormatPipe,
    DropdownDirective,
    EqualValidatorDirective,
    PropertyFormatPipe,
    NotfoundComponent,
  ],
  // TODO enable later and remove the footerC, navC, and Api service
  providers: [ApiServices],
  exports: [DateFormatPipe, PropertyFormatPipe, DropdownDirective, EqualValidatorDirective]
})
export class SharedModule { }
