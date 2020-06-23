import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { GewichtInvoerenComponent } from './Gewicht-invoeren/Gewicht-invoeren.component';

const routes: Routes = [
{ path: 'Gewicht', component: GewichtInvoerenComponent}]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }