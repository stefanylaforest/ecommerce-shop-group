const brands = require("./data/companies.json");
const items = require("./data/items.json");
const orders = require("./data/orders.json");

const getAllProducts = (req, res) => {
  res.status(200).json({ status: 200, message: "success", data: items });
};

const getAllBrands = () => {};

const getSingleProduct = (req, res) => {
  const { productId } = req.params;

  const product = items.find((item) => item._id === productId);

  if (productId) {
    res.status(200).json({ status: 200, message: "success", data: product });
  } else {
    res
      .status(404)
      .json({ status: 404, message: "no item with this id", data: null });
  }
};

const getSingleBrand = (req, res) => {
  const { brandName } = req.params;
  const result = brands.filter((brand) => {
    return brand.name.toLowerCase().includes(brandName.toLowerCase());
  });
  if (result.length > 0) {
    res.json({ status: 200, message: "success", data: result });
  } else {
    res.json({
      status: 404,
      message: `sorry, we do not hold ${result} in our store 😔`,
    });
  }
};

const getAllCategories = (req, res) => {
  let justCategories = [];
  items.forEach((item) => {
    return justCategories.push(item.category);
  });
  let uniqueCategories = [...new Set(justCategories)];
  res
    .status(200)
    .json({ status: 200, message: "success", data: uniqueCategories });
};

const createOrder = () => {};

const getOrderById = (req, res) => {
  const { orderId } = req.params;

  const order = orders.find((order) => order._id === orderId);

  if (order) {
    res.status(200).json({ status: 200, message: "success", data: order });
  } else {
    res.status(200).json({
      status: 404,
      message: "no order with this id",
      data: null,
    });
  }
};

module.exports = {
  getAllProducts,
  getAllBrands,
  getSingleProduct,
  getSingleBrand,
  getAllCategories,
  createOrder,
  getOrderById,
};
