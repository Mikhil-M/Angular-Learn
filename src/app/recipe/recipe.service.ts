import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  public recipeChanged = new Subject<Recipe[]>();
  public recipeSelected = new EventEmitter<Recipe>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "The test item",
  //     "This is simply a test",
  //     "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
  //     [new Ingredient("Meat", 1), new Ingredient("Frech Fries", 30)]
  //   ),
  //   new Recipe(
  //     "The another test item",
  //     "This is simply a test",
  //     "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
  //     [new Ingredient("Bun", 2), new Ingredient("Meat", 1)]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // It will return a copy, otherwise it will be reference to the same array
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    // let recipe = this.recipes.find( (recipe:Recipe) => { return recipe.id === id;});
    return this.recipes[id];
  }

  addItemsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
