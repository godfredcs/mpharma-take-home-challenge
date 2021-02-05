import axios from './../../../store/service';

const service = {
    /**
     * Get all products
     */
    all(params = {}) {
        return axios.get('/', { params })
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data));
    },
}

export default service;
