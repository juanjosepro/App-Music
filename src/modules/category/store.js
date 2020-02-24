import CategoryServices from './services'

const SET_ALL_CATEGORIES = 'category/SET_ALL_CATEGORIES'
const SET_CATEGORY = 'category/SET_CATEGORY'
const UPDATE_CATEGORY = 'category/UPDATE_CATEGORY'
const CREATE_CATEGORY = 'category/CREATE_CATEGORY'
const DELETE_CATEGORY = 'category/DELETE_CATEGORY'

export const CategoryStore = {
  namespaced: true,
  state: {
    category: '',
    categories : [],
  },
  actions: {
    createCategory: async ({ commit }, payload) => {
      const res = await CategoryServices.createCategory(payload)
      commit(CREATE_CATEGORY, res.data)
    },
    getAllCategories: async ({ commit }) => {
      const res = await CategoryServices.getAllCategories()
      commit(SET_ALL_CATEGORIES, res.data)
    },
    getCategoryById: async ({ commit }, payload) => {
      const res = await CategoryServices.getCategory(payload)
      commit(SET_CATEGORY, res.data)
    },
    updateCategory: async ({ commit, state }, payload) => {
      const id = payload
      const res = await CategoryServices.updateCategory(id, state.category)
      commit(UPDATE_CATEGORY, res.data)
    },
    deleteCategory: async ({ commit }, payload) => {
      const res = await CategoryServices.deleteCategory(payload)
      commit(DELETE_CATEGORY, res.data)
    }
  },
  mutations: {
    [CREATE_CATEGORY] (state, payload) {
      state.categories.push(payload)
    },
    [SET_ALL_CATEGORIES] (state, payload) {
      state.categories = payload
    },
    [SET_CATEGORY] (state, payload) {
      state.category = payload
    },
    [UPDATE_CATEGORY] (state, payload) {
      const {categories} = state
      
      const newState = categories.map((category) => {
        if (category.id === payload.id) {
          category = payload
        }
        
        return category
      })
      state.categories = newState
    },
    [DELETE_CATEGORY] (state, payload) {
      const { categories } = state
      const newState = categories.filter(category => category.id !== payload)
      state.categories = newState
  }, 
  }
}