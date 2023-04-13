import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftingComponent } from './crafting/crafting.component';
import { LandingComponent } from './landing/landing.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "Login", component: LoginComponent},
  {path: "Register", component: RegisterComponent},
  {path: "Landing", component: LandingComponent},
  {path: "Map", component: MapComponent},
  {path: "Crafting", component: CraftingComponent},


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
