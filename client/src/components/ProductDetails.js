import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./GlobalStyles";

let initialState = { product: "", quantityOfProduct: "" };

const ProductDetails = ({ handleClickOnCartIcon }) => {
  //set current product on page
  const [currentItem, setCurrentItem] = useState([]);
  //declare a state for local storage
  const [itemInCart, setItemInCart] = useState(initialState);
  //declare a state for the quantity to put in item in cart (for local storage)
  const [quantityInCart, setQuantityInCart] = useState(0);
  //declare a state for selected quantity toggle
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  //if selectedQuantity > NumInStock, the selectedQuantity stops incrementing
  const [message, setMessage] = useState("");
  //useParams to set the currentItem
  let { productId } = useParams();

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((rest) => rest.json())
      .then((json) => setCurrentItem(json.data));
  }, []);

  //substract selectedQuantity toggle
  const substractQtyHandler = () => {
    //not letting it get under zero
    if (selectedQuantity === 1) {
      return;
    }
    setSelectedQuantity(selectedQuantity - 1);
    setMessage("");
  };

  //increment selectedQuantity toggle
  const addQtyHandler = () => {
    if (selectedQuantity === currentItem.numInStock) {
      setMessage(`Only ${currentItem.numInStock} left in stock`);
      return;
    }
    setSelectedQuantity(selectedQuantity + 1);
  };

  //add to cart function
  const addToCart = () => {
    handleClickOnCartIcon();
    if (itemInCart.quantityOfProduct < 1) {
      setQuantityInCart(quantityInCart + selectedQuantity);
      setItemInCart({
        ...itemInCart,
        product: currentItem,
        quantityOfProduct: selectedQuantity,
      });
    }
    if (itemInCart.quantityOfProduct !== 0) {
      setQuantityInCart(quantityInCart + selectedQuantity);
      setItemInCart({
        ...itemInCart,
        product: currentItem,
        quantityOfProduct: quantityInCart + selectedQuantity,
      });
    }
  };

  //setting cart to local storage
  if (itemInCart !== initialState) {
    localStorage.setItem(currentItem._id, JSON.stringify(itemInCart));
  }

  //for you to understand what everything does: I left my console.logs in here feel free to comment them out
  //& keep clicking the add to cart button:

  // console.log("itemInCart Quantity:", itemInCart.quantityOfProduct);
  // console.log("cart:", itemInCart);
  // console.log("quantityInCart:", quantityInCart);

  return (
    <Wrapper>
      <ItemImg src={currentItem.imageSrc} alt={currentItem.name} />
      <div>
        <ItemTitle>{currentItem.name}</ItemTitle>
        <Price>CAD {currentItem.price}</Price>
        <p>
          📦 Free Shipping on all orders <br />
          🔥 Price Match Guarantee
        </p>
        <AddToCartRow>
          <QuantityContainer>
            <SubtractBtn onClick={substractQtyHandler}>-</SubtractBtn>
            <Quantity>{selectedQuantity}</Quantity>
            <AddBtn onClick={addQtyHandler}>+</AddBtn>
          </QuantityContainer>
          <button className="accentBtn" onClick={addToCart}>
            Add To Cart - {currentItem.price}
          </button>
        </AddToCartRow>
        {message && <p>{message}</p>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  margin-top: -16px;
  padding: 50px;
  justify-content: space-evenly;
`;

const ItemImg = styled.img`
  border-radius: 5px;
`;

const ItemTitle = styled.h1`
  font-size: 22px;
  color: ${theme.fontColor};
`;

const Price = styled.p`
  font-size: 22px;
  color: ${theme.fontColor};
  margin-top: -10px;
`;

const AddToCartRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const SubtractBtn = styled.button`
  width: 60px;
  height: 33px;
  font-weight: 500;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;

  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

const Quantity = styled.p`
  border: 1px solid #000000;
  padding: 3px 20px;
  font-size: 0.8rem;
  font-weight: 400;
`;

const AddBtn = styled.button`
  width: 60px;
  height: 33px;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  padding: 0;

  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

export default ProductDetails;
