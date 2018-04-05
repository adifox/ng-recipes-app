import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Schnitzel',
  //     'Recipe for testing',
  //     'https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg',
  //     [
  //       new Ingredients('Meat', 1),
  //       new Ingredients('French Fries', 20)
  //      ]),
  //   new Recipe(
  //     'A Hamburger',
  //     'Recipe for testing',
  //     'https://photos.smugmug.com/Thai-Recipes-2017/i-cbT2RpB/0/f743dc95/X3/thai-cashew-chicken-recipe-30-X3.jpg',
  //     [
  //       new Ingredients('Bread', 2),
  //       new Ingredients('Meat', 1)
  //     ])
  // ]; // NOTE: some dummy Data for development;

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
