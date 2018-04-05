import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredient = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoe', 3)
  ];

  addIngredients(ingredients: Ingredients) {
    this.ingredients.push(ingredients);
    this.ingredient.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredient.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredient.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredient.next(this.ingredients.slice());
  }
}
