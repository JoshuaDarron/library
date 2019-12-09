import axios from 'axios'
const ROUTE = '/api/google'


export default {
    /**
     * @param {String} q
     */
    searchGoogleInBooks(q) {
        return axios.get(`${ROUTE}?q=${q.split(' ').join('+') || q}`)
    },
    /**
     * @param {String} q
     */
    searchGoogleInAuthors(q) {
        return axios.get(`${ROUTE}?q=${q.split(' ').join('+')}`)
    }
}