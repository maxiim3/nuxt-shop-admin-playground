<template>
  <PageWrapper>
    <PageTitle>Admin</PageTitle>
    <p>Bienvenus sur votre interface d'administration</p>

    <section class="pt-8 pb-12 space-y-4">
      <strong>Add a product</strong>
      <form action="" class="space-y-4">
        <input class="w-full p-2 rounded-md border border-slate-200" type="text" placeholder="product name">
        <input class="w-full p-2 rounded-md border border-slate-200" type="number" placeholder="price">
        <input class="w-full p-2 rounded-md border border-slate-200" type="number" placeholder="stock">
        <GenericButton>Add</GenericButton>
      </form>

    </section>    <strong>All products</strong>
    <ul class="space-y-2">
      <li
          class="grid grid-cols-4 odd:bg-slate-100 place-items-center transition-all"
          v-for="(item, key) of products" :key="key"
      >
        <span>{{item.name}}</span>
        <span >${{item.price}}</span>
        <span>x {{item.inStock}}</span>
        <span class="space-x-2">
          <GenericButton>
            <Icon name="streamline:interface-edit-write-1-edit-edition-form-pen-text-write"/>
          </GenericButton>
          <GenericButton>
            <Icon name="material-symbols:delete-outline"/>
          </GenericButton>
        </span>
      </li>
    </ul>
  </PageWrapper>
</template>

<script setup lang="ts">

import {useAuth} from "~/store/auth";
import PageWrapper from "~/components/PageWrapper.vue";

const editPrice = ref(false)
const { products} = useGetAllProductsFromDB()
const store = useAuth()
const isConnected = computed(() => store.isConnected)

watchEffect(() => {
  if (!isConnected.value ) {
    navigateTo("/connexion")
  }
})
</script>

<style lang="scss" scoped>

</style>
