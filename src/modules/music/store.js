import MusicServices from "./services";

const SET_ALL_MUSIC = 'music/SET_ALL_MUSIC'
const SET_MUSIC = 'music/SET_MUSIC'
const UPDATE_MUSIC = 'music/UPDATE_MUSIC'
const CREATE_MUSIC = 'music/CREATE_MUSIC'
const DELETE_MUSIC = 'music/DELETE_MUSIC'

export const MusicStore = {
    namespaced: true,
    state: {
        music: '',
        musics: []
    },
    actions: {
        createMusic: async ({ commit }, payload) => {
            const res = await MusicServices.createMusic(payload)
            commit(CREATE_MUSIC, res.data)
        },
        getAllMusic: async ({ commit }) => {
            const res = await MusicServices.getAllMusic()
            commit(SET_ALL_MUSIC, res.data)
        },
        getMusicByCategory: async ({ commit }, payload) => {
            const res = await MusicServices.getMusicByCategory(payload)
            commit(SET_MUSIC, res.data)
        },
        updateMusic: async ({ commit, state }, payload) => {
            const { id } = payload
            const res = await MusicServices.updateMusic(id, state.music)
            commit(UPDATE_MUSIC, res.data)
        },
        deleteMusic: async ({ commit }, payload) => {
            const res = await MusicServices.deleteMusic(payload)
            commit(DELETE_MUSIC, res.data)
        }
    },
    mutations: {
        [CREATE_MUSIC] (state, payload) {
            state.musics.push(payload)
        },
        [SET_ALL_MUSIC] (state, payload) {
            state.musics = payload.musics
        },
        [SET_MUSIC] (state, payload) {
            state.musics = payload.musics
        },
        [UPDATE_MUSIC] (state, payload) {
            const { musics } = state
            const newState = musics.map((music) => {
              if (music.id === payload.id) {
                music = payload
              }
      
              return music
            })
      
            state.musics = newState
        }, 
        [DELETE_MUSIC] (state, payload) {
            const { musics } = state
            const newState = musics.filter(music => music.id !== payload)
            state.musics = newState
        },
    }
}