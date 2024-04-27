import type {UserModel} from "~/models/user.model";
import {Privilege} from "~/models/user.model";
import {randomUUID} from "uncrypto";
import {sha256base64} from "ohash";

export const useAuth  = defineStore('auth', {
    state: () => ({ isConnected: false, userInfo:{
            id: randomUUID(),
            name: "Joe" ,
            email: "joe@yahoo.net",
            hashedPW: sha256base64("MyPa$$w0rdIs-beautiful"),
            type: Privilege.admin,
        } as UserModel}),
    actions: {
        login() {
            this.$state.isConnected = true
        },
        logout() {
            this.$state.isConnected = false
        }
    },
})
