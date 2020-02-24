<template>
  <v-app>
    <v-content>
      <v-app-bar dark class="teal lighten-1">
        <v-toolbar-title>Music App</v-toolbar-title>
        
        <v-spacer />

        <v-toolbar-items v-if="$store.getters['login/isUserConnected']">
          <v-btn text exact to="/">Home</v-btn>
          <v-menu open-on-hover bottom
           offset-y transition="slide-x-transition">
            <template v-slot:activator="{ on }">
              <v-btn text dark class="teal lighten-1" v-on="on">
                Users
              </v-btn>
            </template>
      
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <router-link to="/users">List Users</router-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <router-link to="/users/create">Create User</router-link>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn text to="/role">Roles</v-btn>
          <v-btn text to="/categories">Categories</v-btn>
          <v-menu :close-on-content-click="false" open-on-hover bottom offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text dark class="teal lighten-1" v-on="on">
                Music
              </v-btn>
            </template>
      
            <v-list>
              <v-list-item>
                <v-list-item-content >
                  <router-link class="px-4" to="/music/all">listen to all the music</router-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-group>
                <template v-slot:activator>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Listen by category</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
    
                <v-list-item v-for="(category, index) in categories"
                  :key="index"
                  @click="RedirectCategory(category.id)">
                  <v-list-item-content class="px-10">
                    <v-list-item-title>{{category.name}}</v-list-item-title>
                  </v-list-item-content>
    
                  <v-list-item-action>
                    <v-icon>headset</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-menu>
          <v-btn text @click="logout()">Logout</v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
          <v-btn text to="/categories">Categories</v-btn>
          <v-menu :close-on-content-click="false" open-on-hover bottom offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text dark class="teal lighten-1" v-on="on">
                Music
              </v-btn>
            </template>
      
            <v-list>
              <v-list-item>
                <v-list-item-content >
                  <router-link class="px-4" to="/music/all">listen to all the music</router-link>
                </v-list-item-content>
              </v-list-item>
              <v-list-group>
                <template v-slot:activator>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Listen by category</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
    
                <v-list-item v-for="(category, index) in categories"
                  :key="index"
                  @click="RedirectCategory(category.id)">
                  <v-list-item-content class="px-10">
                    <v-list-item-title>{{category.name}}</v-list-item-title>
                  </v-list-item-content>
    
                  <v-list-item-action>
                    <v-icon>headset</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-menu>
          <v-btn text to="/signin">SignIn</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      
      <v-container class="my-4">
        <router-view />
      </v-container>

    </v-content>
  </v-app>
</template>

<script>
import LoginServices from "./modules/login/services";
import { mapActions, mapState } from "vuex";

export default {
  name: 'App',
  data: () => ({
    //
  }),
  created() {
    this.getAllCategories()
  },
  methods: {
    ...mapActions('category', ['getAllCategories']),
    async logout () {
      const res = await LoginServices.logout()
      if (res.data.success) {
        localStorage.removeItem('token')
        location.href ="/";
      }else{
        console.log(res.data);
      }
    },
    RedirectCategory(id) {
      this.$router.push({name: 'by-category', params:{'id': id}})
    }
  },
  computed: {
    ...mapState('category', ['categories'])
  }
};
</script>

<style>
  #app {
    background: #E0EAFC;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
</style>
