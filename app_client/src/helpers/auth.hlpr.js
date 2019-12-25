import axios from 'axios'
const ROUTE = '/api/user'


export default {
    /**
     * @param {String} id
     */
    login(user) {
        return axios.get(`${ROUTE}/login`, user)
    },
    /**
     * @param {String} page
     */
    signin(user) {
        return axios.get(`${ROUTE}/signin`, user)
    },
}