<template>
<article>
  <p>{{product.name}}</p>
  <p>{{product.price}}</p>
  <p>{{ product.inStock }}</p>
  <GenericButton classes="bg-neutral-100" @click="addItem">
   <Icon name="material-symbols:add-shopping-cart"/>
  </GenericButton>
</article>
</template>

<script setup lang="ts">
import type {ProductModel} from "~/models/products.model";
import {useShop} from "~/store/useShop";


interface Props {
  product: ProductModel
}
const props = defineProps<Props>()

const store = useShop()

function addItem() {
  store.addProduct({product: props.product, quantity: 1})
}
</script>

<style scoped lang="scss">

</style>
