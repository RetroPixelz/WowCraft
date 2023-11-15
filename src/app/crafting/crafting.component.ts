import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Recipe } from '../models/recipe';
import { CraftService } from '../services/craft.service';
import { VerifyService } from '../services/verify.service';


@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.scss']
})
export class CraftingComponent {

  constructor (private craft: CraftService, private verify: VerifyService) {}

  Ogrimmar = false
  Stormwind = false
  ThunderBluff = false
  
  isVerified = false

  listOfRecipes: Recipe[] = [];

  isCrafting = false;

  isLoading = false;

  details = ''

  username = new FormControl("");
  password = new FormControl("");

  activeLocation: string | null = null;

  CheckValidLogin() {
    if(!sessionStorage.getItem('Verified')) {
      this.isVerified = false;
    } else {
      this.isVerified = true;

    }
  }

LocationOne() {
  this.isLoading = true
  this.Ogrimmar = true;
  this.Stormwind = false;
  this.ThunderBluff = false;
  this.isLoading = false
  this.activeLocation = 'Ogrimmar';
}

LocationTwo() {
  this.isLoading = true
  this.Ogrimmar = false;
  this.Stormwind = true;
  this.ThunderBluff = false;
  this.isLoading = false
  this.activeLocation = 'Stormwind';
}

LocationThree() {
  this.isLoading = true
  this.Ogrimmar = false;
  this.Stormwind = false;
  this.ThunderBluff = true;
  this.isLoading = false
  this.activeLocation = 'Thunder Bluff';
 
}

ngOnInit() {
 
  this.LocationThree(),
  this.LocationTwo(),
  this.LocationOne(),
  this.CheckValidLogin()

}

}
