<template>
  <div>
    <v-card raised>
      <v-card-title>
        Update User Data
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="updateAuthorData()">
          <v-row>
            <v-col class="d-flex" cols="12" sm="3">
              <v-select
                :items="roles"
                item-text="name"
                item-value="id"
                v-model="user.rol_id"
                label="Select the role for this user"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field label="Name" v-model="user.name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field label="Last name" v-model="user.last_name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" color="grey lighten-1" outlined>
              <v-radio-group v-model="user.sex" row >
                <v-radio label="Woman" color="red" value="Woman"></v-radio>
                <v-radio label="Man" color="primary" value="Man"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field label="country" v-model="user.country"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-menu
                v-model="user.datepicker"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="computedDateFormattedMomentjs"
                    clearable
                    label="Formatted with date moment"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="user.date_of_birth"
                  :max="new Date().toISOString().substr(0, 10)"
                  @change="datepicker = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-select
                :items="listStatus"
                item-text="status"
                v-model="user.status"
                label="Select the status for this user"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" sm="8">
              <v-text-field label="Email" type="email" v-model="user.email">
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field label="Password" type="password" v-model="user.password">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12">
              <v-btn elevation="10" color="warning" class="accent-4 mx-auto" type="submit">Update User</v-btn>
            </v-col>
          </v-row>
          <v-snackbar color="success" v-model="snackbar" top right>Updated User!</v-snackbar>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import moment  from "moment";

export default {
  name: 'EditUser',
  data () {
    return {
      snackbar: false,
      datepicker: false,
    }
  },
  created () {
    const { id } = this.$route.params
    this.getUser(id)
    this.getAllRoles()
    this.getAllStatusUsers()
  },
  methods: {
    ...mapActions("role", ["getAllRoles"]),
    ...mapActions('user', ['getUser', 'updateUser', 'getAllStatusUsers']),
    updateAuthorData () {
      const { id } = this.$route.params
      this.updateUser({id})
      this.snackbar = true
      this.$router.push({name: 'list'})
    }
  },
  computed: {
    ...mapState("role", ["roles"]),
    ...mapState('user', ['user']),
    ...mapState("user", ["listStatus"]),
    computedDateFormattedMomentjs () {
      return this.user.date_of_birth ? moment(this.user.date_of_birth).format('dddd, MMMM Do YYYY') : ''
    },
  }
}
</script>

<style>

</style>