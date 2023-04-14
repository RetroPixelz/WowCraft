import { Component } from '@angular/core';
import { CraftService } from '../services/craft.service';
import { Recipe } from '../models/recipe';
import { CraftthreeService } from '../services/craftthree.service';

@Component({
  selector: 'app-recipethree',
  templateUrl: './recipethree.component.html',
  styleUrls: ['./recipethree.component.scss']
})
export class RecipethreeComponent {

  constructor (private craft: CraftthreeService) {}


  listOfRecipes: Recipe[] = [];

  isCrafting = false;

  isLoading = false;

  

  getRecipes() {
    this.isLoading = true
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
