<template>
  <div>
    <v-card class="elevation-12">
      <v-form @submit.prevent="">
        <v-toolbar color="blue" dark flat>
          <v-toolbar-title>Create new Category</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
            <v-text-field
              v-model="name"
              label="Category"
              name="category"
              prepend-icon="person"
              type="text"
            />

            <v-text-field
              v-model="description"
              id="description"
              label="description"
              name="description"
              prepend-icon="lock"
              type="text"
            />
        </v-card-text>
        <v-card-actions>
          <v-btn type="submir" color="primary">Create</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CreateCategory',
  data() {
    return {
      name:'',
      description:''
    }
  }
}
</script>

<style>

</style>