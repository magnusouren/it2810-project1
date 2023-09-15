export type CategoryType =
  | 'Ordinary drink'
  | 'Cocktail'
  | 'Shake'
  | 'Other / Unknown'
  | 'Cocoa'
  | 'Shot'
  | 'Coffee / Tea'
  | 'Homemade Liqueur'
  | 'Punch / Party Drink'
  | 'Beer'
  | 'Soft Drink';

export type Alcoholic = 'Alcoholic' | 'Non alcoholic' | 'Optional alcohol';

export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Drink {
  drinkId: string;
  strDrink: string;
  ingredients: Array<Ingredient>;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: Alcoholic;
}
