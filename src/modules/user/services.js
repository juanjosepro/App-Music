import { _axios } from '@/plugins/axios';

const token = localStorage.getItem('token')

//_axios.defaults.headers.common['authorization'] = token
const config = {
  headers: {
    authorization : 'Bearer ' + token
  }
}

export default {
  createUser (user) {
    return _axios.post('/users', user, config);
  },
  getAllUsers () {
    return _axios.get('/users', config);
  },
  getAllStatusUsers () {
    return _axios.get('/users/getAllStatusUsers', config);
  },
  getUser (id) {
    return _axios.get('/users/' +id+ '/edit', config);
  },
  updateUser (id, user) {
    return _axios.put('/users/' +id, user, config);
  },
  disableUser (id) {
    return _axios.delete('/users/' +id, config);
  }
}