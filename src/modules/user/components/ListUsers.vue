<template>
  <div>
    <v-card raised>
      <v-card-title>
        Users List
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
      >
      <template v-slot:item.tools="{ item }">
        <v-icon
          small
          class="mr-2"
          color="warning"
          @click="editItem(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          color="red"
          @click="showModalDisable(item)"
        >
          delete
        </v-icon>
      </template>
      
      </v-data-table>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">
            System message
          </v-card-title>
          <v-card-text>
            Do you want to disable this user?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
            <v-btn color="red darken-1" text @click="deleteItem()">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ListUsers',
  data () {
    return {
      search: '',
      id: '',
      headers: [
        { text: 'Rol', value: 'rol_id' },
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Sex', value: 'sex' },
        { text: 'Date oh Birth', value: 'date_of_birth' },
        { text: 'Status', value: 'status' },
        { text: 'Email', value: 'email' },
        { text: 'Tools', value: 'tools' },
      ],
      dialog: false,
    }
  },
  methods: {
    ...mapActions('user', ['getAllUsers', 'disableUser']),
    editItem (item) {
      this.$router.push({name: 'editUser', params:{'id': item.id}})
      },
    showModalDisable (item) {
      this.id = item.id
      this.dialog = true;
    },
    deleteItem () {
      this.disableUser(this.id)
      this.dialog = false;
    },
  },
  computed: {
    ...mapState('user', ['users'])
  },
  created() {
    this.getAllUsers();
  },
  
}
</script>

<style>

</style>