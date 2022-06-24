import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthPinComponent } from './auth/auth-pin/auth-pin.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventComponent } from './event/event.component';
import { LoginGuard } from './guard/login.guard';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', canActivate : [LoginGuard], children : [
      { path: 'accueil', component : HomePageComponent },
      { path: 'events', component : EventComponent },
      { path: 'eventsDetails', component : EventDetailsComponent },
      { path: 'account', component : AccountComponent }
  ] },
  { path : 'login', children : [
    { path: '', component : LoginComponent },
    { path: 'forgot', component : ForgotComponent },
    { path: 'register', component : RegisterComponent },
    { path: 'pin', component : AuthPinComponent },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
