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

  // Verified = JSON.parse(sessionStorage.getItem('Verified'))
  
  details = ''

  username = new FormControl("");
  password = new FormControl("");

  activeLocation: string | null = null;


  // if(this.Verified) {

  // }
  // AlreadyVerified() {
  //   try {
  //     this.Verified === true
      
  //   } catch (error) {
      
  //   }
    
  // }



  // CheckVerification() {
  //   this.verify.CheckVerifications(this.username.value!, this.password.value!).subscribe((Response) => {
  //     if(Response.success) {
  //       console.log("Verfifeid successfully")
  //       this.isVerified = true
  //     } else {
  //       this.isVerified = false
  //     }
  //   })
  // }


  CheckValidLogin() {
    if(!sessionStorage.getItem('Verified')) {
      this.isVerified = false;
    } else {
      this.isVerified = true;

    }
  
  }

  // getRecipes() {
  
  //   this.isLoading = true

  //   this.craft.getAllRecipes().subscribe((data) => {
  //   this.listOfRecipes = data
  //   this.isCrafting = false
  //   this.isLoading = false
    
  //   })
  // } 

 

  // craftRecipe(recipeId: string) {
  //   this.isCrafting = true
  //   this.craft.craftRecipe(recipeId).subscribe((Response) => {
  //     this.isCrafting = false
  //     if(Response.success) {
  //       this.getRecipes();
  //     }
  //   })
  // }
  

  
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
  // this.getRecipes()
  this.LocationThree(),
  this.LocationTwo(),
  this.LocationOne(),
  this.CheckValidLogin()
  // console.log(this.Verified)
  // console.log()
  // console.log(this.Verified)
  
}

}
