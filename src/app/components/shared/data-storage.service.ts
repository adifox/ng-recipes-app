import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  saveData() {
    const data = this.recipeService.getRecipes();
    const token = this.authService.getToken();
    this.http.put(`https://ng-recipes-e52bc.firebaseio.com/data.json?auth=${token}`, data)
      .subscribe((response: Response) => {
        console.log('The server response:', response);
      });
  }

  fetchData() {
    const token = this.authService.getToken();
    this.http.get(`https://ng-recipes-e52bc.firebaseio.com/data.json?auth=${token}`)
      .subscribe((response: Response) => {
        const recipe: Recipe[] = response.json();
        this.recipeService.setRecipes(recipe);
      });
  }
}
