import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'this is simply a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/10brisket.jpg'),
        new Recipe('Another Stew Test Recipe', 'this is simply a test', 'https://www.jessicagavin.com/wp-content/uploads/2020/12/beef-stew-14-1200.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}