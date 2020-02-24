<template>
  <div>
    <template>
      <v-row>
        <v-col class="col-md-4 offset-md-4">
          <v-card raised >
            <v-card-title>
              App Music
            </v-card-title>
            <v-card-text>
             <v-form ref="main" @submit.prevent="uploadMusic()"
                class="mx-auto" height="100" enctype = "multipart/form-data">
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field label="Name Artist" type="text" v-model="artist">
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12">
                    <v-select
                      :items="categories"
                      item-text="name"
                      item-value="id"
                      v-model="category"
                      label="Select the category for this music"
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                  <v-file-input
                    color="deep-purple accent-4"
                    counter
                    label="File input"
                    multiple
                    placeholder="Select your Music"
                    prepend-icon="mdi-paperclip"
                    outlined
                    type="file"
                    :show-size="1000"
                    @change="getMusic"
                    
                  >
                    <template v-slot:selection="{ index, text }">
                      <v-chip
                        v-if="index < 2"
                        color="deep-purple accent-4"
                        dark
                        label
                        small
                      >
                        {{ text }}
                      </v-chip>

                      <span
                        v-else-if="index === 2"
                        class="overline grey--text text--darken-3 mx-2"
                      >
                        +{{ files.length - 2 }} File(s)
                      </span>
                    </template>
                  </v-file-input>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn block outlined color="indigo" type="submit">Upload Music 
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";
export default {
  name: 'CreateMusic',
  data: () => ({
    artist: '',
    music: '',
    category: '',
  }),
  created() {
    this.getAllCategories()
  },
  methods: {
    ...mapActions('category', ['getAllCategories']),
    ...mapActions('music', ['createMusic']),
    getMusic(e) {
      this.music = e[0];
    },
    uploadMusic() {
      this.formData = new FormData();
      this.formData.append('category_id', this.category);
      this.formData.append('artist', this.artist);
      this.formData.append('music', this.music);
      this.createMusic(this.formData)
    }
  },
  computed: {
    ...mapState('category', ['categories'])
  }
}
</script>

<style>

</style>