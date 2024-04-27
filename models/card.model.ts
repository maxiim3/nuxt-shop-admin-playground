import type {ProductModel} from "~/products.model";

export interface CardModel {
    products: ProductModel[]
    quantity: number
}

