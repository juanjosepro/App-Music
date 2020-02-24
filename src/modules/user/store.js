import AuthorServices from './services'

const CREATE_USER = 'user/CREATE_USER'
const SET_USER = 'user/SET_USER'
const SET_ALL_USERS = 'user/SET_ALL_USERS'
const SET_ALL_STATUS_USERS = 'user/SET_ALL_STATUS_USERS'
const DISABLE_USER = 'user/DISABLE_USER'

export const UserStore = {
  namespaced: true,
  state: {
    user: '',
    users : [],
    listStatus: [],
  },
  actions: {
    createUser: async ({ commit }, payload) => {
      const res = await AuthorServices.createUser(payload)
      commit(CREATE_USER, res.data)
    },
    getAllUsers: async ({ commit }) => {
      const res = await AuthorServices.getAllUsers()
      commit(SET_ALL_USERS, res.data)
    },
    getAllStatusUsers: async ({ commit }) => {
      const res = await AuthorServices.getAllStatusUsers()
      commit(SET_ALL_STATUS_USERS, res.data)
    },
    getUser: async ({ commit }, payload) => {
      const res = await AuthorServices.getUser(payload)
      commit(SET_USER, res.data)
    },
    updateUser: async ({state }, payload) => {
      const { id } = payload
      await AuthorServices.updateUser(id, state.user)
    },
    disableUser: async ({commit}, payload) => {
      const res = await AuthorServices.disableUser(payload)
      commit(DISABLE_USER, res.data)
    }
  },
  mutations: {
    [CREATE_USER] (state, payload) {
      state.users.push(payload)
    },
    [SET_ALL_USERS] (state, payload) {
      const users = payload
      state.users = []
      
      users.map((user) => {
        state.users.push({
          id: user.id,
          rol_id: user.rol.name,
          name: user.name,
          last_name: user.last_name,
          country: user.country,
          sex: user.sex,
          date_of_birth: user.date_of_birth,
          status: user.status,
          email: user.email,
        })
      })
    },
    [SET_ALL_STATUS_USERS] (state, payload) {
      state.listStatus = payload
    },
    [SET_USER] (state, payload) {
      state.user = payload
    },
    [DISABLE_USER] (state, payload) {
      const { users } = state
      
      const newState = users.filter(user => user.id !== payload.user.id)
      state.users = newState
    } 
  }
}