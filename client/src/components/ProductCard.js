import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { theme } from "./GlobalStyles";

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
    <Div className="card-body">
      <Link to={"/products/" + _id}>
        <img
          className="product-image"
          src={imageSrc}
          alt="product image"
          width="400px"
        />
      </Link>
        <Link to={"/products/" + _id}>
          <p className="title">{name}</p>
        </Link>
        <div className="tags">
          {/* <span className="tag">For {body_location}</span> */}
        </div>
        <button className="add-to-card-btn">{price} - Add to Cart</button>
    </Div>
  );
};

export default ProductCard;

const Div = Styled.div`

/* flex: 15%; */
/* max-width: 25%; */
background: #454e51;

border-radius: 20px;
overflow: hidden;
  display: flex;
  flex-direction: column;
  /* gap: 1.2rem; */


.product-image {
  background: yellow;
  max-height: 400px;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  /* gap: 1.2rem; */
}

.title {
  font-size: 0.9em;
  color: white;
  margin: 1rem;
  line-height: 1.5em;
  font-size: 1.5em;
}

p {
  margin: 1rem;
  margin: 0;
  color: white;
}

.tag {
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin: 1rem;
  margin-top: auto;
  border-radius: 5px;
  border: 2px solid lightgray;
  color: lightgray;
  font-size: 1.1em;
  display: inline;
  flex: 0;
}
.add-to-card-btn {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 5px;
  font-size: 1.4em;
  font-weight: 700;
  margin: 1rem;
  margin-top: auto;
  display: block;
  border: none;
  color: white;
  background: ${theme.accentColor};

}

`;
