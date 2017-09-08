import { Angular2CarouselModule } from 'angular2carousel';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'angular4-carousel';
import { CustomOption } from './custom-option';
import { Dropdown } from 'ng2-bs-dropdown';
import { DropdownModule } from 'ngx-dropdown';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { GlassesModule } from './glasses/glasses.module';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { NavComponent } from './shared/nav/nav.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
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
    NgbModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    SharedModule,
  ],
  providers: [AuthenticationService, {provide: ToastOptions, useClass: CustomOption}],
  bootstrap: [AppComponent]
})
export class AppModule { }
