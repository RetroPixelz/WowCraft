import { Component } from '@angular/core';
import { CraftService } from '../services/craft.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  constructor (private craft: CraftService) {}

  userId = sessionStorage.getItem("userId");

  listOfRecipes: Recipe[] = [];

  isCrafting = false;
  // isCrafting = true;


  isLoading = false;


  getRecipes() {
   
    this.isLoading = true
 
    this.craft.getAllRecipes().subscribe((data) => {
    this.listOfRecipes = data
    // this.isCrafting = false
    this.isLoading = false
    
    })
  } 

  craftRecipe(recipeId: string, userId: string) {
    this.isCrafting = true;
    this.craft.craftRecipe(recipeId, userId).subscribe((Response) => {
      this.isCrafting = false;
      if (Response && Response.success) { // Check if Response is defined
        this.getRecipes();
      }
    });
  }


  
ngOnInit() {
  this.getRecipes()
 
}

}
