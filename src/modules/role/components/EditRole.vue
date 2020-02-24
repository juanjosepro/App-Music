<template>
  <div>
    <v-card class="elevation-12">
      <v-form @submit.prevent="updateRoleData()">
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Update Role</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="role.name"
            label="Role"
            prepend-icon="person"
            type="text"
          />

          <v-text-field
            v-model="role.description"
            id="description"
            label="description"
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
            Updated Role !
        </v-snackbar>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'EditRole',
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
    ...mapActions('role', ['updateRole']),
    updateRoleData () {
      this.updateRole(this.role.id)
      this.snackbar = true
    }
  },
  computed: {
    ...mapState('role', ['role'])
  }
  
}
</script>

<style>

</style>