import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

let initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  province: "",
  country: "",
  creditCardNum: "",
  expirationDate: "",
  phoneNumber: "",
  orderNum: uuidv4(),
};

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [wearables, setWearables] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formValue, setFormValue] = useState(initialState);

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

  // console.log(wearables);
  // console.log(products)
  // console.log(brands)

  return (
    <AppContext.Provider
      value={{
        products,
        brands,
        itemsInCart,
        setItemsInCart,
        categories,
        wearables,
        selectedItems,
        setSelectedItems,
        formValue,
        setFormValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
