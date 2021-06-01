const brands = require("./data/companies.json");
const items = require("./data/items.json");
const orders = require("./data/orders.json");
const { v4: uuidv4 } = require("uuid");

const getAllProducts = (req, res) => {
  res.status(200).json({ status: 200, message: "success", data: items });
};

const getAllBrands = (req, res) => {
  res.status(200).json({ status: 200, message: "It worked", data: brands });
};

const getAllWearables = (req, res) => {
  const filteredWearables = items.map((item) => item.body_location);
  let uniqueWearables = [...new Set(filteredWearables)];
  res
    .status(200)
    .json({ status: 200, message: "success", data: uniqueWearables });
};

const getSingleProduct = (req, res) => {
  const { productId } = req.params;

  const product = items.find((item) => item._id === Number(productId));

  if (product) {
    res.status(200).json({ status: 200, message: "success", data: product });
  } else {
    res
      .status(404)
      .json({ status: 404, message: "no item with this id", data: null });
  }
};

const getSingleBrand = (req, res) => {
  const { brandName } = req.params;

  const id = brands.find(
    (brand) => brand.name.toLowerCase() === brandName.toLowerCase()
  )?._id;

  const result = items.filter((item) => item.companyId === Number(id));

  // const resultOld = brands.filter((brand) => {
  //   return brand.name.toLowerCase().includes(brandName.toLowerCase());
  // });
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
    phoneNumber,
    date,
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
    phoneNumber
  ) {
    status = "success";
    // validation for email.
    if (!email.split("").includes("@")) {
      return res.status(400).json({ status: "error", error: "missing-@" });
    }
    // validation for the number of credit card.
    if (creditCardNum.length !== 16) {
      return res
        .status(400)
        .json({ status: "error", error: "missing-card-number" });
    }
    // validation for the number of expiration date.
    if (expirationDate.length !== 5) {
      return res.status(400).json({ status: "error", error: "invalidation" });
    }
    // validation for the special symbol of expiration date.
    if (!expirationDate.split("").includes("/")) {
      return res.status(400).json({ status: "error", error: "missing-/" });
    } else {
      console.log(req.body);
      // setting status accordingly, outputing data, generating random order-number.
      return res.status(201).json({
        status: status,
        error: error,
        data: { ...req.body, orderNum: uuidv4() },
      });
    }
  } else {
    return res.status(400).json({ status: "error", error: "missing-entry" });
  }
};

const getOrderById = (req, res) => {
  const { orderId } = req.params;

  const order = orders.find((order) => order.orderNum === orderId);

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

const updateStockNumber = (req, res) => {
  const { productId } = req.params;
  const { selectedQuantityNum } = req.body;
  const product = items.find((item) => item._id === Number(productId));

  const updatedStockNum = product.numInStock - selectedQuantityNum;

  if (product.numInStock > 0) {
    res.status(200).json({
      status: 200,
      message: "success",
      data: { ...product, numInStock: updatedStockNum },
    });
  } else {
    res.status(404).json({ status: 404, message: "Out of stock", data: null });
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
  updateStockNumber,
  getAllWearables,
};
