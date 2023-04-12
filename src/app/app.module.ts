import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MapComponent } from './map/map.component';
import { CraftingComponent } from './crafting/crafting.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthOnlyDirective } from './directives/auth-only.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemtwoComponent } from './itemtwo/itemtwo.Component';
import { ItemthreeComponent } from './itemthree/itemthree.Component'






@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MapComponent,
    CraftingComponent,
    ItemComponent,
    AuthOnlyDirective,
    ItemtwoComponent,
    // ItemthreeComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
