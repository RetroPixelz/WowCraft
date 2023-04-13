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

  constructor (private craft: CraftService) {}

  Ogrimmar = false
  Stormwind = false
  ThunderBluff = false
  

  listOfRecipes: Recipe[] = [];

  isCrafting = false;




  getRecipes() {
    this.isCrafting = true
    this.craft.getAllRecipes().subscribe((data) => {
      this.listOfRecipes = data
    this.isCrafting = false

      console.log(data)
    })
  }

 

  craftRecipe(recipeId: string) {
    this.isCrafting = true
    this.craft.craftRecipe(recipeId).subscribe((Response) => {
      this.isCrafting = false
      if(Response.success) {
        this.getRecipes();
      }
    })
  }
  



  
LocationOne() {
  this.Ogrimmar = true;
  this.Stormwind = false;
  this.ThunderBluff = false;
  console.log("clicked");
}

LocationTwo() {
  this.Ogrimmar = false;
  this.Stormwind = true;
  this.ThunderBluff = false;

  console.log("clicked 2");
}

LocationThree() {
  this.Ogrimmar = false;
  this.Stormwind = false;
  this.ThunderBluff = true;
  console.log("clicked 3");
}

ngOnInit() {
  this.getRecipes()
  this.LocationOne(),
  this.LocationTwo(),
  this.LocationThree()
}


// ngoninit of jwt is verfied then set isverified to true in sessionStorage
}
