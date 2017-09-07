import { AlertComponent } from './alert/alert.component';
import { AlertModule } from 'ngx-bootstrap';
import { AlertService } from './shared/services/alert.service';
import { Angular2CarouselModule } from 'angular2carousel';
import { ApiServices } from './shared/services/api.services';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'angular4-carousel';
import { Dropdown } from 'ng2-bs-dropdown';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { DropdownModule } from 'ngx-dropdown';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { GlassesModule } from './glasses/glasses.module';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { NavComponent } from './shared/nav/nav.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    NotfoundComponent,
    AlertComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2CarouselModule,
    CarouselModule,
    GlassesModule,
    UsersModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    DropdownModule,
    NgbModule
    // SharedModule, / TODO enable later and remove the footerC, navC, and Api service
  ],
  providers: [ApiServices, ApiServices, AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
