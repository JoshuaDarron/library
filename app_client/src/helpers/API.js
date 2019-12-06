import axios from "axios";
// API ROUTE
const ROUTE = "/api/book";

// EXPORT THIS OBJECT
export default {
  /**
   *
   * @param {String} id
   */
  getOneBook(id) {
    return axios.get(`${ROUTE}/${id}`);
  },
  /**
   * getAll Books
   */
  getAllBooks(page, pagesize) {
    return axios.get(ROUTE + `?page=${page}&pagesize=${pagesize}`);
  },
  /**
   * create Book
   * @param {*} book
   */
  createBook(book) {
    return axios.post(ROUTE, book);
  },
  /**
   * update Book
   * @param {*} id
   * @param {*} book
   */
  updateBook(id, book) {
    return axios.put(`${ROUTE}/${id}`, book);
  },
  /**
   * delete Book
   * @param {*} id
   */
  deleteBook(id) {
    return axios.delete(`${ROUTE}/${id}`);
  }
}; // END EXPORT OF OBJECT
