import {productCreator} from "~/models/products.model";

export default defineEventHandler((event) => {
  return [
    productCreator("Gilet", 64.90, 34),
    productCreator("Brosse", 24.90, 120),
    productCreator("Table Basse", 199, 12),
    productCreator("Porte-Feuille", 79.99, 98),
    productCreator("Sandales", 12.90, 154),
    productCreator("Casquette", 18, 45),
  ]
})
