<template>
  <PageWrapper>
    <PageTitle>Shop</PageTitle>
    <section class="w-full flex flex-wrap gap-20 justify-center align-center" v-if="status === PageStatus.ok">
      <ProductCard v-for="(p, k) of products" :key="k" :product="p"/>
    </section>
    <section v-else-if="status === PageStatus.pending">
      <p>Loading...</p>
    </section>
    <section v-else>
      <p>Something might have been wrong...</p>
      <RouteWrapper>
        <NuxtLink to="/">Go Back Home</NuxtLink>
      </RouteWrapper>
      <GenericButton @click="reloadNuxtApp">Retry</GenericButton>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">

import {PageStatus} from "~/composables/useGetAllProductsFromDB";

const {status, products} = useGetAllProductsFromDB()

</script>

