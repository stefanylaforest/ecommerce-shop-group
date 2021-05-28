const brands = require("./data/companies.json");
const items = require("./data/items.json");
const orders = require("./data/orders.json");
const { v4: uuidv4 } = require("uuid");
//just for test

const getAllProducts = (req, res) => {
  res.status(200).json({ status: 200, message: "success", data: items });
};

const getAllBrands = (req, res) => {
  res.status(200).json({ status: 200, messege: "It worked", data: brands });
};

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
      message: `sorry, we do not hold ${brandName} in our store 😔`,
    });
  }
};

const getAllCategories = (req, res) => {
  //create new array to store just the category values of item
  let justCategories = [];
  //loop over and push to the new array
  items.forEach((item) => {
    return justCategories.push(item.category);
  });
  //creates new set and keeps just the unique values
  let uniqueCategories = [...new Set(justCategories)];
  res
    .status(200)
    .json({ status: 200, message: "success", data: uniqueCategories });
};

const createOrder = (req, res) => {
  // required informations
  const {
    firstName,
    lastName,
    email,
    address,
    city,
    province,
    country,
    creditCardNum,
    expirationDate,
    itemId,
    quantity,
  } = req.body;

  let status = "";
  let error = "";

  // primarily checking if all required informations are filled out.
  if (
    firstName &&
    lastName &&
    email &&
    address &&
    city &&
    province &&
    country &&
    creditCardNum &&
    expirationDate &&
    itemId &&
    quantity
  ) {
    status = "success";
    // validation for email.
    if (!email.split("").includes("@")) {
      return res.json({ status: "error", error: "missing-@" });
    }
    // validation for the number of credit card.
    if (creditCardNum.length !== 16) {
      return res.json({ status: "error", error: "missing-card-number" });
    }
    // validation for the number of expiration date.
    if (expirationDate.length !== 5) {
      return res.json({ status: "error", error: "invalidation" });
    }
    // validation for the special symbol of expiration date.
    if (!expirationDate.split("").includes("/")) {
      return res.json({ status: "error", error: "missing-/" });
    } else {
      // setting status accordingly, outputing data, generating random order-number.
      return res.json({
        status: status,
        error: error,
        data: { ...req.body, orderNum: uuidv4() },
      });
    }
  } else {
    return res.json({ status: "error", error: "missing-entry" });
  }
};

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
