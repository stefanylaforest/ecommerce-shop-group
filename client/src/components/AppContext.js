import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [wearables, setWearables] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((rest) => rest.json())
      .then((json) => setProducts(json.data));
  }, []);

  useEffect(() => {
    fetch("/api/brands")
      .then((rest) => rest.json())
      .then((json) => setBrands(json.data));
  }, []);

  useEffect(() => {
    fetch("/api/categories")
      .then((rest) => rest.json())
      .then((json) => setCategories(json.data));
  }, []);

  useEffect(() => {
    fetch("/api/wearables")
      .then((rest) => rest.json())
      .then((json) => setWearables(json.data));
  }, []);

  console.log(wearables);
  // console.log(products)
  // console.log(brands)

  return (
    <AppContext.Provider
      value={{ products, brands, itemsInCart, setItemsInCart, categories }}
    >
      {children}
    </AppContext.Provider>
  );
};
