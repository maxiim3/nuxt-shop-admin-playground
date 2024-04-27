<template>
  <PageWrapper>
    <PageTitle>Connexion</PageTitle>
    <p>Veuillez vous connecter</p>
    <GenericButton @click="connect">Connecter</GenericButton>
  </PageWrapper>
</template>

<script setup lang="ts">
import {useAuth} from "~/store/auth";
import PageWrapper from "~/components/PageWrapper.vue";

const store = useAuth()
const isConnected = computed(() => store.isConnected)

onMounted(async () => {
  console.log("Connection page, is Conne? ", isConnected)
  if (isConnected.value) {
    navigateTo("/")
  }
})

function connect() {
  navigateTo("/")
 store.login()
}
</script>

<style lang="scss" scoped>

</style>
