import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  constructor(private http: HttpClient) {}

  url = "http://localhost:3000/recipes"

  //func to get all recipes
  getAllRecipes() {
    return this.http.get<Recipe[]>(this.url)
  }

  //method to craft a recipe
  craftRecipe(recipeId: string) {
    return this.http.post<any>(`${this.url}/craft`, {recipeId})
  }
}
