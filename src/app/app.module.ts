import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MapComponent } from './map/map.component';
import { CraftingComponent } from './crafting/crafting.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MapComponent,
    CraftingComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
