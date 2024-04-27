import {useLocalStorage} from "@vueuse/core";
import type {RouteLocationNormalized} from "vue-router";

export default function defineNuxtRouteMiddleware(_:RouteLocationNormalized, to:RouteLocationNormalized) {
    if(!window) return
onMounted(() => {

    const isConnected = window.localStorage.getItem("is_connected")
    switch (to.path) {
        case "/admin" :
            if(!isConnected) {
                navigateTo("/connexion")
            } else {
                navigateTo("/admin")
            }
            break;
        case "/connexion" :
            if(isConnected) {
                navigateTo("/")
            } else {
                navigateTo("/connexion")
            }
            break
    }
})
}
