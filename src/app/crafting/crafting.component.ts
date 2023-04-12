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

  constructor (private verify: VerifyService, private craft: CraftService) {}

  //is user verified
  isVerified = false;

  //Formcontrols
  username = new FormControl("");
  password = new FormControl("");

  //list of recipes var
  listOfRecipes: Recipe[] = [];

  isCrafting = false;


  CheckVerification() {
    this.verify.CheckVerification(this.username.value!, this.password.value!).subscribe((Response) => {
      if(Response.success) {
        //store jwt in storage
        console.log("Verified Successfully")
        this.isVerified = true;
      } else {
        console.log("Verified Unsuccessfull")
        this.isVerified = false;
      }
    })
  }

  getRecipes() {
    this.craft.getAllRecipes().subscribe((data) => {
      this.listOfRecipes = data
      console.log(data)
    })
  }

  ngOnInit() {
    this.getRecipes()
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
  

// ngoninit of jwt is verfied then set isverified to true in sessionStorage
}
