<template>
  <div>
    <v-card class="elevation-12">
      <v-form @submit.prevent="updateCategoryData">
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Update Category</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="category.name"
            label="Category"
            name="category"
            prepend-icon="person"
            type="text"
          />

          <v-text-field
            v-model="category.description"
            id="description"
            label="description"
            name="description"
            prepend-icon="lock"
            type="text"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn  color="primary" type="submit">Update</v-btn>
        </v-card-actions>
        <v-snackbar
          color="success"
          v-model="snackbar"
          top
          right>
            Updated Category !
        </v-snackbar>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'EditCategory',
  data () {
    return {
      name: '',
      description: '',
      snackbar: false
    }
  },
  created () {
    this.name = ''
    this.description = ''
  },
  methods: {
    ...mapActions('category', ['updateCategory']),
    updateCategoryData () {
      this.updateCategory(this.category.id)
      this.snackbar = true
    }
  },
  computed: {
    ...mapState('category', ['category'])
  }
  
}
</script>

<style>

</style>