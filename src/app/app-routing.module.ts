import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { SellpointsComponent } from './pages/sellpoints/sellpoints.component';
import { AuthenticateGuard } from './services/guards/authenticate.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'creators',
    component: CreatorsComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'sellpoints',
    component: SellpointsComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
