<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn elevation="10" dark color=" mr-4" :to="{name: 'create'}">User Create</v-btn>
        <v-btn elevation="10" :to="{name: 'list'}">User List</v-btn>
      </v-col>
    <v-spacer />
    </v-row>
    <router-view class="my-3"/>

  </div>  
</template>

<script>
export default {
  name: 'UserPage',
}
</script>

<style lang="scss">

</style>