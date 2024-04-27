import type {ProductModel} from "~/models/products.model";
import type {CardModel} from "~/models/card.model";
import type {UserModel} from "~/models/user.model";
type State = {
  card: CardModel[]
}
export const useShop  = defineStore('shop', {
  state: (): State => ({ card: []}),
  actions: {
    addProduct(payload: CardModel) {
      const productIsInCard = this.card.find((p) => p.product.id === payload.product.id)

      if(productIsInCard) {
        return  this.updateProduct({product: payload.product, quantity: productIsInCard.quantity + 1})
      }

      this.card.push({product: payload.product, quantity:1 })
    },
    updateProduct(payload: CardModel) {
      for (const item of this.card) {
        if(item.product.id === payload.product.id){
          item.quantity = payload.quantity
        }

      }
    },
    removeProduct(id:ProductModel['id']) {
       this.card = this.card.filter((item: CardModel) =>
              item.product.id !== id
      )
    },
    checkout(user: UserModel) {
      console.log(user, this.card)
      // update db
      // payout
      // empty product local list
    },
    calculateTotalFor(product: CardModel) {
      const p = this.card.find((p) => p.product.id === product.product.id)

      if (!p) return 0

      const total = p.quantity * p.product.price
      return Number( total.toFixed(2) )
    },
    calculateTotal() {
      let total = 0

      for (const item of this.card) {
        total += this.calculateTotalFor(item)
      }
      return Number(total.toFixed(2))
    },
    numberOfItems() {
      return this.card.reduce((acc, item)=> item.quantity + acc, 0)
    }

  },


})
