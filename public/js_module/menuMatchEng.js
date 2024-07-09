import { menuData } from "../data/menuData";
const menuArray = Object.values(menuData.menu).reduce((acc, category) => {
  return acc.concat(category);
}, []);
console.log(menuArray);
