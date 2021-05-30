import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={"/products/" + _id}>
        <img
          className="product-image"
          src={imageSrc}
          alt="product image"
          width="100%"
        />
      </Link>
      <div className="card-body">
        <Link to={"/products/" + _id}>
          <h2>{name}</h2>
        </Link>
        <p>for: {body_location}</p>
        <p>Price: {price}</p>
        <button className="add-to-card-btn">ADD TO CART</button>
      </div>
    </Div>
  );
};

export default ProductCard;

const Div = Styled.div`

  background: darkgray;
flex: 25%;

border-radius: 20px;
overflow: hidden;

.product-image {
  background: yellow;
}

.card-body {
  padding: 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 0.9em;
  color: white;
  margin: 0;
}

p {
  margin: 0;
  color: white;
}

.add-to-card-btn {
  border-radius: 500px;
  margin-top: auto;
  display: block;
  width: 100%;
  border: none;
  color: white;
  background: orange;
}

`;
