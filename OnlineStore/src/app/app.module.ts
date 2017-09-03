import { Angular2CarouselModule } from 'angular2carousel';
import { ApiServices } from './shared/services/api.services';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'angular4-carousel';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { GlassesModule } from './glasses/glasses.module';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
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
    LoginComponent
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
    // SharedModule, / TODO enable later and remove the footerC, navC, and Api service
    NgbModule
  ],
  providers: [ApiServices, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
