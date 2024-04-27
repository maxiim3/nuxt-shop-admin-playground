<template>
  <div class="relative">
    <GenericButton class="relative" @click="toggleModal" >
      <Icon v-if="!show" name="material-symbols:shopping-cart-rounded"/>
      <Icon v-else name="material-symbols:close-rounded"/>
      <span>
        ${{Math.round(totalPrice)}}
      </span>
    </GenericButton>
    <aside
        class="absolute space-y-2 top-12 rounded-md right-0 w-60 h-min-42 p-4 bg-slate-100 border border-slate-400 "
        v-show="show"
    >
      <header class="flex justify-between w-full items-center">
        <strong>{{addedItems}} Items</strong>
        <strong>-</strong>
        <strong>${{totalPrice}}</strong>
      </header>
      <ul class="w-full flex flex-col gap-3">
        <li class="px-4 w-full flex justify-between items-center" v-for="({product, quantity}, key) of products" :key="key">
          <span class="text-center">{{product.name}}</span>
          <span class="text-center">${{product.price * quantity}}</span>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {useShop} from "~/store/useShop";

const show = ref(false)
const store = useShop()
const products = computed(() => [ ...store.card ])

const addedItems = computed(() => {
  let total = 0
  for( let item of store.card) {
    total += item.quantity
  }

  return total
})

const totalPrice = computed(() => {
  let total = 0
  for( let item of store.card) {
    total += item.quantity * item.product.price
  }

  return total
})

function toggleModal() {
 show.value = !show.value
}
</script>

<style scoped lang="scss">

</style>
