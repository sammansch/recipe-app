
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Brisket', 
                   'The best roasted Brisket!', 
                   'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/10brisket.jpg',
                   [
                       new Ingredient('Brisket', 1),
                       new Ingredient('Potatoes', 5)                       
                   ]),
        new Recipe('Beef Stew', 
                   'Hearty Winter Beef Stew', 
                   'https://www.jessicagavin.com/wp-content/uploads/2020/12/beef-stew-14-1200.jpg',
                   [
                       new Ingredient('Stew Meat', 2),
                       new Ingredient('Baby Carrots', 15),
                       new Ingredient('Red Skin Potatoes', 7)
                   ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}