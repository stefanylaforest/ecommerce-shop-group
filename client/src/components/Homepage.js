import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const Homepage = () => {
  const { categories } = useContext(AppContext);

  // const [featuredProduct, setFeaturedProduct] = useState();

  // useEffect(() => {
  //   fetch("api/products/${productId}")
  //     .then((rest) => rest.json())
  //     .then((json) => setFeaturedProduct(json.data));
  // }, []);

  // console.log("stef", categories);
  return <div></div>;
};

export default Homepage;
