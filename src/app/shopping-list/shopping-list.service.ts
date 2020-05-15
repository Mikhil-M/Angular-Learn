import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientEmitter = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];
    
    getIncredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientEmitter.emit(this.ingredients.slice());
    }

    addIngredients(ingredients :Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientEmitter.emit(this.ingredients.slice());
    }
    
}