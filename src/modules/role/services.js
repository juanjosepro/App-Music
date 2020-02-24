import { _axios } from "@/plugins/axios";

const token  = localStorage.getItem('token')

const config = {
  headers: {
    Authorization: 'Bearer ' + token
  }
}

export default {
  createRole (role) {
    return _axios.post('/roles', role, config);
  },
  getAllRoles() {
    return _axios.get('/roles', config)
  },
  getRoleById(id) {
    return _axios.get('/roles/'+ id +'/edit', config)
  },
  updateRole (id, role) {
    return _axios.put('/roles/' +id, role, config);
  },
  deleteRole (id) {
    return _axios.delete('/roles/'+ id, config)
  },
}