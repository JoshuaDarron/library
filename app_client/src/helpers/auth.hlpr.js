import axios from 'axios'
const ROUTE = '/api/user'

const headers = {
    headers: {
        authorization: `Bearer: ${localStorage.token}`
    }
}

export default {
    /**
     * @param {Object} user
     */
    login(user) {
        return axios.post(`${ROUTE}/login`, user)
    },
    /**
     * @param {Object} user
     */
    signup(user) {
        return axios.post(`${ROUTE}/signup`, user)
    },

    info() {
        return axios.get(`${ROUTE}/`, headers)
    },

    update(user) {
        return axios.put(`${ROUTE}/`, user, headers)
    }
}