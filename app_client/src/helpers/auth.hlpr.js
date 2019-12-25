import axios from 'axios'
const ROUTE = '/api/user'


export default {
    /**
     * @param {Object} user
     */
    login(user) {
        return axios.get(`${ROUTE}/login/`, user)
    },
    /**
     * @param {Object} user
     */
    signin(user) {
        return axios.get(`${ROUTE}/signin`, user)
    }
}