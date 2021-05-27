const brands = require("./data/companies.json");
const items = require("./data/items.json");

const getAllProducts = (req, res) => {
  res.status(200).json({ status: 200, message: "success", data: items });
};

const getAllBrands = () => {};

const getSingleProduct = () => {};

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

const getAllCategories = () => {};

const createOrder = () => {};

const getOrderById = () => {};

module.exports = {
  getAllProducts,
  getAllBrands,
  getSingleProduct,
  getSingleBrand,
  getAllCategories,
  createOrder,
  getOrderById,
};
