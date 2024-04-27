import type {ProductModel} from "~/models/products.model";

export interface CardModel {
    product: ProductModel
    quantity: number
}

