import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is simply a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/10brisket.jpg'),
    new Recipe('Another Stew Test Recipe', 'this is simply a test', 'https://www.jessicagavin.com/wp-content/uploads/2020/12/beef-stew-14-1200.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
