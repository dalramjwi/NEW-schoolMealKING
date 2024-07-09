import { menuData } from "../data/menuData";
const menuArray = [].concat(...Object.values(menuData.menu));
const menuEngArray = [].concat(...Object.values(menuData.menuEng));
const combinedArray = menuArray.map((item, index) => [
  item,
  menuEngArray[index],
]);
