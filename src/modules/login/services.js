import  { _axios } from '@/plugins/axios'

const token = localStorage.getItem('token')

const config = {
  headers: {
    authorization : 'Bearer ' + token
  }
}

export default {
    signIn({email, password}) {
        return _axios.post('/login', {email, password})
    },
    logout () {
        return _axios.get('/logout', config)
    }
}
