import { Component } from '@angular/core';
import { CraftService } from '../services/craft.service';
import { Recipe } from '../models/recipe';
import { CrafttwoService } from '../services/crafttwo.service';

@Component({
  selector: 'app-recipetwo',
  templateUrl: './recipetwo.component.html',
  styleUrls: ['./recipetwo.component.scss']
})
export class RecipetwoComponent {

  constructor (private craft: CrafttwoService) {}
  userId = sessionStorage.getItem("userId");

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

  craftRecipe(recipeId: string, userId: string) {
    this.isCrafting = true
    this.craft.craftRecipe(recipeId, userId).subscribe((Response) => {
      this.isCrafting = false
    this.isLoading = false

      if(Response.success) {
        this.getRecipes();
      }
    })
  }

  
ngOnInit() {
  this.getRecipes()
 
}
}
