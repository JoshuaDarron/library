import axios from 'axios'
const ROUTE = '/api/book'

const headers = {
  headers: {
    authorization: `Bearer: ${localStorage.token}`
  }
}


export default {
  /**
   * @param {String} id
   */
  getOneBook(id) {
    return axios.get(`${ROUTE}/${id}`, headers)
  },
  /**
   * @param {String} page
   */
  getAllBooks(page) {
    return axios.get(ROUTE + `?page=${page}`, headers)
  },
  /**
   * @param {String} page
   * @param {String} path 
   */
  getTypesOfBooks(page, path) {
    return axios.get(ROUTE + path + `?page=${page}`, headers)
  },
  /**
   * @param {String} book
   */
  createBook(book) {
    return axios.post(ROUTE, book, headers)
  },
  /**
   * @param {String} id
   * @param {String} book
   */
  updateBook(id, book) {
    return axios.put(`${ROUTE}/${id}`, book, headers)
  },
  /**
   * @param {String} id
   */
  deleteBook(id) {
    return axios.delete(`${ROUTE}/${id}`, headers)
  }
}