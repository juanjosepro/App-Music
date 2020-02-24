<template>
  <div>
     <v-row>
      <v-col sm="12" md="6" lg="4">
        <div>
          <v-card class="mx-auto" max-width="374" raised>
            <v-img height="250"
              src="@/assets/listening-to-music.jpeg">
            </v-img>

            <v-card-title>{{current.artist}} - {{current.slug}}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating :value="4.5" color="amber" dense half-increments
                 readonly size="14">
                </v-rating>

                <div class="grey--text ml-4">4.5 (413)</div>
              </v-row>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <v-chip-group  column
                active-class="deep-purple accent-4 white--text center--align" flat>
                <v-chip @click="prev"><v-icon>skip_previous</v-icon></v-chip>
                <v-chip v-if="!isPlaying" @click="play"><v-icon large>play_arrow</v-icon></v-chip>
                <v-chip v-else @click="pause"><v-icon>pause</v-icon></v-chip>
                <v-chip @click="next"><v-icon>skip_next</v-icon></v-chip>
                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" small text>
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
      <v-col sm="12" md="6" lg="8">
        <v-card raised>
          <v-card-title>Select the music to play</v-card-title>
          <v-card-text>
            <v-responsive class="overflow-y-auto" max-height="425">
              <v-responsive height="200vh" class="text-center">
                <v-lazy :options="{ threshold: .5}"
                  min-height="200"
                  transition="fade-transition">
                  <v-card raised>
                    <v-card-text>
                      <v-simple-table>
                        <template v-slot>
                          <tbody>
                            <tr v-for="music in musics" :key="music.id" @click="play(music)"
                            :class="(music.url == current.url) ? 'music playing cursor' : 'music cursor'">
                              <td>{{ music.artist }}</td>
                              <td>{{ music.slug }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card-text>
                  </v-card>
                </v-lazy>
              </v-responsive>
            </v-responsive>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
export default {
  name: 'AllMusic',
  data: () => ({
    music:  "@/assets/mike-posner.mp3",
    // Audio state
    current: {},
    index: 0,
    isPlaying: false,
    player: new Audio(),
  }),
  created(){
    this.getAllMusic()    
  },
  methods: {
    ...mapActions('music', ['getAllMusic']),
    // Methods Audio
    play (music) {
      if (typeof music.url != "undefined") {
        this.current = music;
      }else{
        this.current = this.musics[this.index];
      }

      this.player.src = 'http://127.0.0.1:8000/'+this.current.url;
      
      this.player.play();
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.musics.length - 1) {
          this.index = 0;
        }

        this.current = this.musics[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
    next () {
      this.index++;
      if (this.index > this.musics.length - 1) {
        this.index = 0;
      }

      this.current = this.musics[this.index];
      this.play(this.current);
    },
    prev () {
      this.index--;
      if (this.index < 0) {
        this.index = this.musics.length - 1;
      }

      this.current = this.musics[this.index];
      this.play(this.current);
    }
  },
  computed: {
    ...mapState('music', ['musics'])
  }
}
</script>

<style lang="scss" src="@/assets/scss/MusicTable.scss"/>
