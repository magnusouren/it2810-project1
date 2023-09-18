export type CategoryType =
  | 'Ordinary Drink'
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

export type SimpleDrinkType = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};
