import { menu } from '../data/menu.js';

class Menu {
  static hasItemInMenu(item) {
    const allMenu = Object.values(menu).flat();
    return allMenu.some((menuItem) => menuItem.name === item);
  }
}

export default Menu;
