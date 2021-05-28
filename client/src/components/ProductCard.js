import React from "react";
import Styled from "styled-components";

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    body_location,
    category,
    _id,
    imageSrc,
    numInStock,
    companyId,
  } = product;
  return (
    <Div>
      <img
        className="product-image"
        src={imageSrc}
        alt="product image"
        width="100%"
        />
        <h2>{name}</h2>
      <p>for: {body_location}</p>
      <p>Price: {price}</p>
      <button>ADD TO CART</button>
    </Div>
  );
};

export default ProductCard;

const Div = Styled.div`

border: 1px solid gray;
flex: 30%;

.product-image {
  background: yellow;
}

h2 {
  font-size: 0.9em;
}

border-radius: 10px;

`;
