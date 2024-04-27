import {randomUUID} from "uncrypto";

export interface ProductModel {
    id: string
    name: string
    price: number
    inStock: number
}

export function productCreator (
    name:ProductModel['name'],
    price: ProductModel['price'],
    inStock: ProductModel['inStock']
) :ProductModel {

    return {
        id: randomUUID(),
        name,
        price,
        inStock,
    }

}
