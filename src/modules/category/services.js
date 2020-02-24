import { _axios } from '@/plugins/axios';

const token = localStorage.getItem('token')

//_axios.defaults.headers.common['authorization'] = token
const config = {
  headers: {
    authorization : 'Bearer ' + token
  }
}

export default {
  createCategory (category) {
    return _axios.post('/categories', category, config);
  },
  getAllCategories () {
    return _axios.get('/categories', config);
  },
  getCategory (id) {
    return _axios.get('/categories/' +id+ '/edit', config);
  },
  updateCategory (id, category) {
    return _axios.put('/categories/' +id, category, config);
  },
  deleteCategory (id) {
    return _axios.post('/categories/'+ id, config)
  },
}