import Inventory from "./inventory.js";
import Product from "./product.js";

let i = new Inventory();

let p1 = new Product("7", "Ultimo", "2", "2");
let p2 = new Product("1", "Primero", "2", "2");
let p3 = new Product("2", "Segundo", "32", "df");

i.add(p1);
i.add(p2);
//i.add(p3);

console.log(i);
