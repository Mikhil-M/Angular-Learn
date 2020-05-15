import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'The test item',
            'This is simply a test',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('Frech Fries',30)
            ]),            
        new Recipe(
            'The another test item',
            'This is simply a test',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [ 
                new Ingredient('Bun',2),
                new Ingredient('Meat',1)
            ])
      ];

    constructor(private slService: ShoppingListService){}
    
    getRecipes(){
        return this.recipes.slice(); // It will return a copy, otherwise it will be reference to the same array
    }

    addItemsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}