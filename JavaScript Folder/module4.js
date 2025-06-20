// app.js
import { products } from "./module1.js";
import { calculateprice } from "./module2.js";
import { displayproducts } from "./module3.js";

displayproducts(products, calculateprice);
