import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './components/events/events.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { SellpointsComponent } from './pages/sellpoints/sellpoints.component';
import { NgIconsModule } from '@ng-icons/core';
import {  bootstrapCupStraw, bootstrapPersonFillSlash, bootstrapWatch } from '@ng-icons/bootstrap-icons';
import { AuthenticateGuard } from './services/guards/authenticate.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    EventsComponent,
    CreatorsComponent,
    SellpointsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({ bootstrapCupStraw, bootstrapPersonFillSlash, bootstrapWatch })
  ],
  providers: [AuthenticateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
