const axios = require("axios");

class FakeStore {
  constructor() {
    this.baseURL = "https://fakestoreapi.com";
  }

  getProducts() {
    return axios.get(`${this.baseURL}/products`).then((r) => r.data);
  }

  getCategories() {
    return axios.get(`${this.baseURL}/products/categories`).then((r) => r.data);
  }

  getProductsByCategory(category) {
    return axios.get(`${this.baseURL}/products/category/${category}`).then((r) => r.data);
  }
}

module.exports = FakeStore;