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

export type SimpleDrink = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};
