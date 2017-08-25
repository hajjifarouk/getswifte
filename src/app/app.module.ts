import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {LoginService} from './services/login.service';
import {RidesService} from './services/rides.service'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import { HomeComponent } from './pages/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddRideComponent } from './pages/add-ride/add-ride.component';
import { TermsComponent } from './pages/terms/terms.component';
import { RideDetailComponent } from './pages/ride-detail/ride-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideMenuComponent,
    NavBarComponent,
    ProfileComponent,
    AddRideComponent,
    TermsComponent,
    RideDetailComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZexFLa1Izg7wJTJzP5pg3E7nNrA-P0ZU',
      libraries: ["places"]
    }),
    Angular2FontawesomeModule
  ],
  providers: [LoginService,RidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
