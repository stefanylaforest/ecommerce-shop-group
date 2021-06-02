"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const {
  getAllProducts,
  getAllBrands,
  getSingleProduct,
  getSingleBrand,
  getAllCategories,
  createOrder,
  getOrderById,
  updateStockNumber,
  getAllWearables,
} = require("./handlers");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  // .get("/test", (req, res) => res.status(200).json("hello from server"))

  .get("/api/products", getAllProducts)
  .get("/api/brands", getAllBrands)
  .get("/api/wearables", getAllWearables)
  .get("/api/products/:productId", getSingleProduct)
  .get("/api/brands/:brandName", getSingleBrand)
  .get("/api/categories", getAllCategories)
  .post("/api/order", createOrder)
  // .get("/api/order/:orderId", getOrderById)
  .patch("/api/products/:productId/update", updateStockNumber)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
