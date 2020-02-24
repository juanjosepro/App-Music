<template>
  <div>
    <v-btn small dark color="primary" @click="createForm()">
      <v-icon>mdi-plus</v-icon>
      Create new Rol
    </v-btn>
    <v-row class="my-3">
      <v-col sm="12" md="6" lg="6">
        <v-card raised>
        <v-simple-table>
          <template v-slot>
            <thead class="black">
              <tr >
                <th class="white--text">Name</th>
                <th class="white--text">Description</th>
                <th class="white--text">Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="role in roles" :key="role.id">
                <td>{{ role.name }}</td>
                <td>{{ role.description }}</td>
                <td>
                  <v-row>
                    <v-icon
                      class="mr-2"
                      @click="editForm(role.id)"
                    >
                      edit
                    </v-icon>
                    <v-icon
                      class="mr-2"
                      @click="showModalDisable(role)"
                    >
                      delete
                    </v-icon>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <CreateRole v-if="create"/>
        <EditRole v-else/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">
            System message
          </v-card-title>
          <v-card-text>
            Do you want to disable this author?
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
import CreateRole from "../components/CreateRole";
import EditRole from "../components/EditRole";

export default {
  name: 'RolPage',
  data: () => ({
    id:'',
    create: true,
    dialog: false,
  }),
  components: {
    CreateRole,
    EditRole
  },
  created() {
    this.getAllRoles();
  },
  methods: {
    ...mapActions('role', ['getAllRoles','getRoleById', 'deleteRole']),
    createForm () {
      this.create = true
    },
    editForm (id) {
      this.getRoleById(id)      
      this.create = false
    },
    showModalDisable (role) {
      this.id = role.id
      this.dialog = true;
    },
    deleteItem () {
      this.deleteRole(this.id)
      this.dialog = false;
    },
  },
  computed: {
    ...mapState('role', ['roles']),
  },

}
</script>

<style>

</style>