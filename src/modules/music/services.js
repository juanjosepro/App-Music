import { _axios } from "@/plugins/axios";

const token = localStorage.getItem('token')

const config = {
    headers: {
        "authorization": 'Bearer ' + token,
        "content-type": 'multipart/form-data'
    }
}

export default {
    createMusic (music) {
        return _axios.post('/music', music, config)
    },
    getAllMusic () {
        return _axios.get('/music', config)
    },
    getMusicByCategory (id) {
        return _axios.get('/music/'+ id , config)
    },
    updateMusic (id, music) {
        return _axios.put('/music/'+ id, music, config)
    },
    deleteMusic (id) {
        return _axios.delete('/music/'+ id, config)
    },
}