import Vue from 'vue'
import Vuex from 'vuex'
import { LoginStore } from '@/modules/login/store'
import { RoleStore } from '@/modules/role/store'
import { UserStore } from '@/modules/user/store'
import { CategoryStore } from "@/modules/category/store";
import { MusicStore } from "@/modules/music/store";

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    login: {...LoginStore},
    role: {...RoleStore},
    user: {...UserStore},
    category: {...CategoryStore},
    music: {...MusicStore},
  }
})
