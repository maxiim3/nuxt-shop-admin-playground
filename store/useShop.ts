import type {ProductModel} from "~/models/products.model";
import type {CardModel} from "~/models/card.model";
import ProductCard from "~/components/ProductCard.vue";
import type {UserModel} from "~/models/user.model";

export const useShop  = defineStore('shop', {
  state: () => ({ card:  Array<CardModel>()}),
  actions: {
    addProduct(payload: CardModel) {
      this.$state.card.push({product: payload.product, quantity:1 })
    },
    updateProduct(payload: CardModel) {
      return this.$state.card.map((item) =>{
        if(item.product.name === payload.product.name){
          item.quantity = payload.quantity
        }
      })
    },
    removeProduct(productName:ProductModel['name']) {
      return this.$state.card.filter((item: CardModel) =>
              item.product.name !== productName
      )
    },
    checkout(user: UserModel) {
      console.log(user, this.$state.card)
      // update db
      // payout
      // empty product local list
    }
  },
})
