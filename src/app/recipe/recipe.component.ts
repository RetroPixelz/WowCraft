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


  listOfRecipes: Recipe[] = [];

  isCrafting = false;

  isLoading = false;


  getRecipes() {
    // add loading animation here 
    this.isLoading = true
    //
    this.craft.getAllRecipes().subscribe((data) => {
    this.listOfRecipes = data
    this.isCrafting = false
    this.isLoading = false
    
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

  
ngOnInit() {
  this.getRecipes()
 
}

}
