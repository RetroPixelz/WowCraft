import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraftingComponent } from './crafting/crafting.component';
import { LandingComponent } from './landing/landing.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  // {path: "initial",  component, InitialCompnent},
  // {path: "List",  component, ListCompnent},
  {path: "Landing", component: LandingComponent},
  {path: "Map", component: MapComponent},
  {path: "Crafting", component: CraftingComponent},

  // {path: "NewPage", component: NewPostComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
