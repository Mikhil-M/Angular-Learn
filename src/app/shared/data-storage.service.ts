import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipe/recipe.service";
import { Recipe } from '../recipe/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    let recipe = this.recipeService.getRecipes();
    this.http
      .put(
        "https://angular-learn-project-49686.firebaseio.com/recipes.json",
        recipe
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>("https://angular-learn-project-49686.firebaseio.com/recipes.json")
      .pipe(
        map(recipes =>{
          return recipes.map(recipe=>{
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            }
          })
        }),
        tap( recipe => {
          this.recipeService.setRecipes(recipe);
        })
      )
  }
}
