<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-form @submit.prevent="login()">
            <v-toolbar color="success" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
                <v-text-field
                  v-model="email"
                  label="Login"
                  name="login"
                  prepend-icon="person"
                  type="text"
                />

                <v-text-field
                  v-model="password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                />
            </v-card-text>
            <v-card-actions>
              <v-btn to="/signUp" color="primary">Register</v-btn>
              <v-spacer />
              <v-btn type="submit" color="success">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignIn',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapActions('login', ['signIn']),
    login() {
      const user = {email: this.email, password: this.password}
      this.signIn(user)
    }
  }
}
</script>

<style>

</style>