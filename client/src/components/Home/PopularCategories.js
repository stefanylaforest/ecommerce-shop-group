import React from "react";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  return (
    <div>
      <Link to="/products?category=entertainment">
        <div>Entertainment</div>
      </Link>
      <div>Fitness</div>
      <div>Lifestyle</div>
    </div>
  );
};

export default PopularCategories;
