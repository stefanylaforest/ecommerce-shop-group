import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Styled, { keyframes } from "styled-components";
import { theme } from "./GlobalStyles";
import { AppContext } from "./AppContext";

let initialState = { product: "", quantityOfProduct: "" };

const ProductCard = ({ product, handleClickOnCartIcon }) => {
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

  const { selectedItems, setSelectedItems } = useContext(AppContext);
  const [itemInCart, setItemInCart] = useState(initialState);
  const [quantityInCart, setQuantityInCart] = useState(0);

  const addToCart = () => {
    // handleClickOnCartIcon();
    setSelectedItems((value) => {
      return [...value, { product: product, quantityOfProduct: 1 }];
    });
    if (itemInCart.quantityOfProduct < 1) {
      setQuantityInCart((selectedQuantity) => quantityInCart + 1);
      setItemInCart({
        ...itemInCart,
        product: product,
        quantityOfProduct: 1,
      });
    }
    if (itemInCart.quantityOfProduct !== 0) {
      setQuantityInCart((selectedQuantity) => quantityInCart + 1);
      setItemInCart({
        ...itemInCart,
        product: product,
        quantityOfProduct: quantityInCart + 1,
      });
    }
  };

  if (itemInCart !== initialState) {
    localStorage.setItem(product._id, JSON.stringify(itemInCart));
  }

  return (
    <Div className="card-body">
      <Link to={"/products/" + _id}>
        <div className="image-wrapper">
          <img className="product-image" src={imageSrc} alt="product image" />
        </div>
      </Link>
      <Link to={"/products/" + _id}>
        <p className="title">{name}</p>
      </Link>
      <div className="tags">
        {/* <span className="tag">For {body_location}</span> */}
      </div>
      <button
        className="add-to-card-btn"
        onClick={addToCart}
        disabled={!numInStock}
      >
        {numInStock ? `${price} - Add to Cart` : "Out of Stock"}
      </button>
    </Div>
  );
};

export default ProductCard;

const scaleIn = keyframes`
  from {
    transform: scale(0.8)
  }

  to {
    transform: scale(1);
  }
`;

const Div = Styled.div`

max-width: 400px;
background: #454e51;
width: 100%;

border-radius: 20px;
overflow: hidden;
  display: flex;
  flex-direction: column;
  /* gap: 1.2rem; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

&:hover {
  box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
}

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    height: 350px;
  }

.product-image {
  /* width: 100%; */
  /* max-height: 400px; */
  background: yellow;
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
  font-size: 1.2em;
  font-weight: 700;
  margin: 1rem;
  margin-top: auto;
  display: block;
  border: none;
  color: white;
  background: ${theme.accentColor};

  &:active {
    animation: scaleIn 0.3s ease-in-out forwards;
  }

  &:hover {
    background: #C64500;
    cursor: pointer;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
}
`;
