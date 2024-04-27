<template>
  <div class="relative">
    <GenericButton class="relative" @click="toggleModal" >
      <Icon v-if="!show" name="material-symbols:shopping-cart-rounded"/>
      <Icon v-else name="material-symbols:close-rounded"/>
      <span v-show="!!listOfProducts.length" class="text-sm">
        ${{store.calculateTotal()}}
      </span>
    </GenericButton>
    <aside
        class="absolute space-y-2 top-12 rounded-md right-0 w-60 h-min-42 p-4 bg-slate-100 border border-slate-400 "
        v-show="show"
    >
      <header v-if="!!listOfProducts.length" class="flex justify-between w-full items-center">
        <strong>{{store.numberOfItems()}} Items</strong>
        <strong>-</strong>
        <strong>${{store.calculateTotal()}}</strong>
      </header>
      <header v-else class="flex justify-between w-full items-center">
        <strong>Your cart is empty</strong>
      </header>
      <ul class="w-full flex flex-col gap-3 text-sm">
        <li class=" w-full flex justify-between items-center"
            v-for="({product, quantity}, key) of listOfProducts"
            :key="key"
        >
          <button @click="() => decrProduct(product, quantity)">
            <Icon name="mdi:minus-circle-outline"/>
          </button>
          <button @click="() => incrProduct(product, quantity)">
            <Icon name="material-symbols:add-circle-outline-rounded"/>
          </button>
          <span class="text-center">{{product.name}}</span>
          <span class="text-center">x{{quantity}}</span>
          <span class="text-center">${{store.calculateTotalFor({product, quantity})}}</span>
        </li>
      </ul>
      <footer v-show="!!listOfProducts.length">
        <GenericButton v-if="isConnected" classes="flex gap-2 items-center mx-auto mt-6">
          <Icon name="material-symbols:shopping-cart-checkout"/>Check-Out
        </GenericButton>
        <GenericButton v-else classes="flex gap-2 items-center mx-auto mt-6">
          <NuxtLink to="/connexion">Connect to checkout</NuxtLink>
        </GenericButton>
      </footer>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {useShop} from "~/store/useShop";
import type {ProductModel} from "~/models/products.model";
import {useAuth} from "~/store/auth";
const auth = useAuth()
const isConnected = computed(() => auth.isConnected)

const show = ref(false)
const store = useShop()
const listOfProducts = computed(() => [ ...store.card ])

function toggleModal() {
 show.value = !show.value
}

function incrProduct(product:ProductModel, quantity: number){
  store.updateProduct({product, quantity: quantity +1})
}

function decrProduct(product:ProductModel, quantity: number){
  if(quantity === 1) {
    store.removeProduct(product.id)
  }
  store.updateProduct({product, quantity: quantity - 1})
}
</script>

<style scoped lang="scss">

</style>
