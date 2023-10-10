import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class CraftthreeService {

  userId = sessionStorage.getItem("userId");

  constructor(private http: HttpClient) {}

  url = "http://localhost:3000/recipeThree"

  //func to get all recipes
  getAllRecipes() {
    return this.http.get<Recipe[]>(this.url)
  }

  //method to craft a recipe
  craftRecipe(recipeId: string, userId: string) {
    return this.http.post<any>(`${this.url}/craft`, {recipeId, userId})
  }
}
