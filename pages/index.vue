<template>
  <PageWrapper>
    <PageTitle v-if="isConnected">Welcome {{user.name}}</PageTitle>
    <PageTitle v-else>Home</PageTitle>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur harum maiores necessitatibus?</p>
  </PageWrapper>
</template>

<script setup lang="ts">
import {useAuth} from "~/store/auth";

const store = useAuth()
const isConnected = computed(() => store.isConnected)
const user = computed(() => store.userInfo)
</script>

