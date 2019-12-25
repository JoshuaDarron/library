import axios from 'axios'
const ROUTE = '/api/user'


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
    }
}