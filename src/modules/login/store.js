import LoginServices from './services'

const SET_TOKEN = 'login/SET_TOKEN'

export const LoginStore = {
    namespaced: true,
    state: {
        token: '',
    },
    actions: {
        signIn: async ({commit}, payload) => {     
            const res = await LoginServices.signIn(payload) 
            commit(SET_TOKEN, res.data)
        }
    },
    mutations: {
        [SET_TOKEN] (state, payload) {
            state.token = payload.token
            localStorage.token = payload.token
            location.href ="/users/list";
        }
    },
    getters: {
        isUserConnected: () => {
            if (localStorage.getItem('token')) {
                return true
            }else{
                return false
            }
        }
    }
}