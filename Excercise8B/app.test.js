const request = require("supertest");
const app = require("./app");

describe("Product Routes", () => {

  test("GET /api/products => returns list of products", () => {
    return request(app)
      .get("/api/products")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("data");
        expect(Array.isArray(response.body.data)).toBe(true);
      });
  });

  test("GET /api/products/categories => returns list of categories", () => {
    return request(app)
      .get("/api/products/categories")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("data");
        expect(Array.isArray(response.body.data)).toBe(true);
      });
  });

  test("GET /api/products/category/electronics => returns filtered products", () => {
    return request(app)
      .get("/api/products/category/electronics")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("data");
        expect(Array.isArray(response.body.data)).toBe(true);
      });
  });

});