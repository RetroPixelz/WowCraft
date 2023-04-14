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
