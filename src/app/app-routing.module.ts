import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { EventComponent } from './event/event.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component : HomePageComponent },
  { path: 'accueil', component : HomePageComponent },
  { path: 'events', component : EventComponent },
  { path: 'account', component : AccountComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
