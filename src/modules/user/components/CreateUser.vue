<template>
  <div>
    <v-card raised>
      <v-card-title>
        Create a new User
      </v-card-title>
      <v-card-text>
        <v-form ref="main" @submit.prevent="createNewUser()">
          <v-row>
            <v-col class="d-flex" cols="12" sm="3">
              <v-select
                :items="roles"
                item-text="name"
                item-value="id"
                v-model="rol"
                label="Select the role for this user"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field label="Name" v-model="name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field label="Last name" v-model="lastName"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" color="grey lighten-1" outlined>
              <v-radio-group v-model="sex" row >
                <v-radio label="Woman" color="red" value="Woman"></v-radio>
                <v-radio label="Man" color="primary" value="Man"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field label="country" v-model="country"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-menu
                v-model="datepicker"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="computedDateFormattedMomentjs"
                    clearable
                    label="Formatted with datefns"
                    readonly
                    v-on="on"
                    @click:clear="date = null"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  @change="datepicker = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-select
                :items="listStatus"
                item-text="status"
                v-model="status"
                label="Select the status for this user"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" sm="8">
              <v-text-field label="Email" type="email" v-model="email">
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field label="Password" type="password" v-model="password">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12">
              <v-btn dark class="blue darken-3 mx-auto" elevation="10" type="submit">Create User</v-btn>
            </v-col>
          </v-row>
          <v-snackbar color="success" v-model="snackbar" top right>Created User!</v-snackbar>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import moment  from "moment";

export default {
  name: "CreateUser",
  data() {
    return {
      rol: "",
      name: "",
      lastName: "",
      country: "",
      sex: "",
      date: new Date().toISOString().substr(0, 10),
      status: "",
      email: "",
      password: "",
      snackbar: false,
      datepicker: false,
    };
  },
  created () {
    this.getAllRoles()
    this.getAllStatusUsers()
  },
  methods: {
    ...mapActions("role", ["getAllRoles"]),
    ...mapActions("user", ["getAllStatusUsers"]),
    ...mapActions("user", ["createUser"]),
    createNewUser() {
      let newUser = {
        rol_id: this.rol,
        name: this.name,
        last_name: this.lastName,
        country: this.country,
        sex: this.sex,
        date_of_birth: this.date,
        status: this.status,
        email: this.email,
        password: this.password
      };
      
      this.createUser(newUser);
      newUser = {}
      this.snackbar = true;
      this.$refs.main.reset();
    }
  },
  computed: {
    ...mapState("user", ["listStatus"]),
    ...mapState("role", ["roles"]),
    computedDateFormattedMomentjs () {
      return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
    },
  },
};
</script>

<style>
</style>