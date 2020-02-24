<template>
  <div>
    <div class="btn-container">
      <v-btn elevation="10" dark color="primary" @click="createForm()" v-if="$store.getters['login/isUserConnected']">
        <v-icon>mdi-plus</v-icon>
        Create new Category
      </v-btn>
      <v-btn elevation="10" dark color="red" @click="getAllMusic()">
        <v-icon>headset</v-icon>
        Listen to all the music
      </v-btn>
    </div>
    <v-spacer />
    <v-row class="my-3">
      <v-col cols="12">
        <v-card raised>
          <v-card-title>
            Category Music
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="category in categories" :key="category.id">
                    <td>{{ category.name }}</td>
                    <td>{{ category.description }}</td>
                    <td>
                      <v-row>
                        <v-btn elevation="10" fab small dark color="red" @click="listenToMusic(category.id)">
                          <v-icon>headset</v-icon>
                        </v-btn>
                      </v-row>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CategoryPage',
  data: () => ({
    create: true,
    idCategory: ''
  }),
  created() {
    this.getAllCategories();
  },
  methods: {
    ...mapActions('category', ['getAllCategories']),
    createForm () {
      this.create = true
    },
    listenToMusic (id) {
      this.$router.push({name: 'by-category', params:{'id': id}})    
    },
    getAllMusic() {
      this.$router.push({name: 'allmusic'})    
    }
  },
  computed: {
    ...mapState('category', ['categories']),
  },

}
</script>

<style>
.btn-container {
  display: flex;
  justify-content: space-between
}
</style>