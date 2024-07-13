import { menuData } from "../data/menuData.js";
const menuArray = [].concat(...Object.values(menuData.menu));
const menuEngArray = [].concat(...Object.values(menuData.menuEng));
export const combinedArray = menuArray.map((item, index) => [
  item,
  menuEngArray[index],
]);
