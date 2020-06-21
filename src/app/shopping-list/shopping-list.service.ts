import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientEmitter = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];
    
    getIncredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientEmitter.next(this.ingredients.slice());
    }

    addIngredients(ingredients :Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientEmitter.next(this.ingredients.slice());
    }
    
}