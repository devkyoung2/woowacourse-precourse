import { menu } from '../data/menu.js';

class Menu {
  static hasItemInMenu(item) {
    const allMenu = Object.values(menu).flat();
    return allMenu.some((menuItem) => menuItem.name === item);
  }

  static isOnlyDrink(items) {
    const drinks = menu.drink.map((item) => item.name);
    return items.every((item) => drinks.includes(item.name));
  }
}

export default Menu;
