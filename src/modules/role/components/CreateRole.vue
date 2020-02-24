<template>
  <div>
    <v-card class="elevation-12">
      <v-form @submit.prevent="createNewRole()">
        <v-toolbar color="blue" dark flat>
          <v-toolbar-title>Create new Role</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
            <v-text-field
              v-model="name"
              label="Role"
              prepend-icon="person"
              type="text"
            />

            <v-text-field
              v-model="description"
              label="description"
              prepend-icon="lock"
              type="text"
            />
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="primary">Create</v-btn>
        </v-card-actions>
        <v-snackbar
          color="success"
          v-model="snackbar"
          top
          right>
            Created Role !
        </v-snackbar>
      </v-form>
    </v-card>
  </div>
</template>

<script>

import { mapActions } from "vuex";

  export default {
  name: 'CreateRole',
  data() {
    return {
      name:'',
      description:'',
      snackbar: false
    }
  },
  methods: {
    ...mapActions('role', ['createRole']),
    createNewRole() {
      this.createRole({
        name: this.name,
        description: this.description
      })
      this.snackbar = true
    }
  }
}
</script>

<style>

</style>