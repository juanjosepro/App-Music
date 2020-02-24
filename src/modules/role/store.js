import RoleServices from "./services";

const CREATE_ROLE = 'role/CREATE_ROLE' 
const SET_ALL_ROLES = 'role/SET_ALL_ROLES' 
const SET_ROLE = 'role/SET_ROLE' 
const UPDATE_ROLE = 'role/UPDATE_ROLE' 
const DELETE_ROLE = 'role/DELETE_ROLE' 

export const RoleStore = {
  namespaced: true,
  state: {
    role: '',
    roles: []
  },
  actions: {
    createRole: async ({ commit }, payload) => {
      const res = await RoleServices.createRole(payload)
      commit(CREATE_ROLE, res.data)
    },
    getAllRoles: async ({ commit }) => {
      const res = await RoleServices.getAllRoles();
      commit(SET_ALL_ROLES, res.data)
    },
    getRoleById: async ({ commit }, payload) => {
      const res = await RoleServices.getRoleById(payload);
      commit(SET_ROLE, res.data)
    },
    updateRole: async ({ commit, state }, payload) => {
      const id = payload
      const res = await RoleServices.updateRole(id, state.role)
      
      commit(UPDATE_ROLE, res.data)
    },
    deleteRole: async ({ commit }, payload) => {
      const res = await RoleServices.deleteRole(payload)
      commit(DELETE_ROLE, res.data)
    }
  },
  mutations: {
    [CREATE_ROLE] (state, payload) {
      state.roles.push(payload.role)
    },
    [SET_ALL_ROLES] (state, payload) {
      state.roles = payload.roles
    },
    [SET_ROLE] (state, payload) {
      state.role = payload.role
    },
    [UPDATE_ROLE] (state, payload) {
      const {roles} = state
      
      const newState = roles.map((role) => {
        if (role.id === payload.role.id) {
          role = payload.role
        }
        
        return role
      })
      state.roles = newState
    },
    [DELETE_ROLE] (state, payload) {
      const { roles } = state
      const newState = roles.filter(role => role.id !== payload.role.id)
      state.roles = newState
  },
  }
}