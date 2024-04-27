<template>
 <header >
    <nav class="w-full bg-slate-100 flex justify-between px-8 py-4 items-center">
      <ul class="flex gap-2 justify-left align-center">
        <RouteWrapper :data-active="route.path==='/'">
          <NuxtLink to="/">Home</NuxtLink>
        </RouteWrapper>
        <RouteWrapper :data-active="route.path==='/shop'">
          <NuxtLink to="/shop">Shop</NuxtLink>
        </RouteWrapper>
        <template v-if="isConnected">
          <RouteWrapper v-if="isAdmin" :data-active="route.path==='/admin'">
            <NuxtLink to="/admin">Admin</NuxtLink>
          </RouteWrapper>
          <GenericButton @click="store.logout">Deconnexion</GenericButton>
        </template>
        <RouteWrapper  v-else :data-active="route.path==='/connexion'">
          <NuxtLink to="/connexion">Connexion</NuxtLink>
        </RouteWrapper>
      </ul>
      <HeaderCardPreview/>
  </nav>
  </header>
  <slot/>
</template>
<script lang="ts" setup>
import {useAuth} from "~/store/auth";
import RouteWrapper from "~/components/RouteWrapper.vue";
import HeaderCardPreview from "~/components/HeaderCardWidget.vue";
import {Privilege} from "~/models/user.model";

const route = useRoute()
const store = useAuth()
const isConnected = computed(() => store.isConnected)
const isAdmin = computed(()=>store.userInfo.type === Privilege.admin)

onMounted(() => console.log(store.isConnected))
</script>
