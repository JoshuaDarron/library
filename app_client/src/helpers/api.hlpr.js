import axios from 'axios'
const ROUTE = '/api/book'


export default {
  /**
   * @param {String} id
   */
  getOneBook(id) {
    return axios.get(`${ROUTE}/${id}`)
  },
  /**
   * @param {String} page
   */
  getAllBooks(page) {
    return axios.get(ROUTE + `?page=${page}`)
  },
  /**
   * @param {String} page
   */
  getTypesOfBooks(page, path) {
    return axios.get(ROUTE + path + `?page=${page}`)
  },
  /**
   * @param {String} book
   */
  createBook(book) {
    return axios.post(ROUTE, book)
  },
  /**
   * @param {String} id
   * @param {String} book
   */
  updateBook(id, book) {
    return axios.put(`${ROUTE}/${id}`, book)
  },
  /**
   * @param {String} id
   */
  deleteBook(id) {
    return axios.delete(`${ROUTE}/${id}`)
  }
}