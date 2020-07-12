import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientEmitter = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ];

    getIngredient(index: number){
        return this.ingredients[index];
    }
    
    getIncredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientEmitter.next(this.ingredients.slice());
    }

    updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientEmitter.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientEmitter.next(this.ingredients.slice());
    }

    addIngredients(ingredients :Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientEmitter.next(this.ingredients.slice());
    }
    
}