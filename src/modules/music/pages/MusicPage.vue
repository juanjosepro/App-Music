<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-btn :to="{name: 'createmusic'}">Create Music</v-btn>
      </v-col>
    </v-row>
  
    <v-spacer />
  
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'MusicPage',
  data: () => ({
    //
  }),
}
</script>

<style>

</style>