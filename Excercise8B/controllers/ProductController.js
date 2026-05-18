const FakeStore = require("../libraries/FakeStore");
let storeObject = new FakeStore();

const getAll = async (req, res) => {
  let result = await storeObject.getProducts();
  res.json({ data: result });
  res.status(200);
};

const getCategories = async (req, res) => {
  let result = await storeObject.getCategories();
  res.json({ data: result });
  res.status(200);
};

const getByCategory = async (req, res) => {
  let category = req.params.category;
  let result = await storeObject.getProductsByCategory(category);
  res.json({ data: result });
  res.status(200);
};

module.exports = {
  getAll,
  getCategories,
  getByCategory,
};