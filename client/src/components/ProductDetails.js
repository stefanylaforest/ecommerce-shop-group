import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./GlobalStyles";
import { RiPaypalFill } from "react-icons/ri";
import { FaCcApplePay, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { AppContext } from "../components/AppContext";

let initialState = { product: "", quantityOfProduct: "" };

const ProductDetails = ({ handleClickOnCartIcon }) => {
  const { selectedItems, setSelectedItems } = useContext(AppContext);
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
    // handleClickOnCartIcon();
    setSelectedItems((value) => {
      return [
        ...value,
        { product: currentItem, quantityOfProduct: selectedQuantity },
      ];
    });
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

  return (
    <Container>
      <Wrapper>
        <ItemContainer>
          <ItemImg src={currentItem.imageSrc} alt={currentItem.name} />
        </ItemContainer>
        <ProductInfoContainer>
          <ItemTitle>{currentItem.name}</ItemTitle>
          <Price>CAD {currentItem.price}</Price>
          <p>
            📦 Free Shipping on all orders <br />
            🔥 Price Match Guarantee
          </p>
          <AddToCartRow>
            <QuantityContainer>
              <SubtractBtn onClick={substractQtyHandler}>-</SubtractBtn>
              <Quantity>
                {currentItem.numInStock > 0 ? selectedQuantity : 0}
              </Quantity>
              <AddBtn onClick={addQtyHandler}>+</AddBtn>
            </QuantityContainer>
            <Button
              className="accentBtn"
              onClick={currentItem.numInStock > 0 ? addToCart : ""}
              currentItem={currentItem.numInStock}
            >
              {currentItem.numInStock > 0
                ? `Add To Cart - ${currentItem.price}`
                : "Out of Stock"}
            </Button>
          </AddToCartRow>
          {message && <p>{message}</p>}

          <AcceptedPayment>
            <FaCcVisa style={{ margin: "10px" }} />
            <FaCcMastercard style={{ margin: "10px" }} />{" "}
            <RiPaypalFill style={{ margin: "10px" }} />
            <FaCcApplePay style={{ margin: "10px" }} />
            <SiAmericanexpress
              style={{ borderRadius: "3px", margin: "10px" }}
            />
          </AcceptedPayment>
        </ProductInfoContainer>
      </Wrapper>
      <Filler></Filler>
    </Container>
  );
};

const Button = styled.button`
  cursor: ${({ currentItem }) =>
    currentItem > 0 ? "pointer" : "not-allowed !important"};
  background-color: ${({ currentItem }) =>
    currentItem > 0 ? "" : "gray !important"};
`;

const Container = styled.div`
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 50px;
  flex-wrap: wrap;
  /* margin: 0px 100px; */
  border-radius: 50px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: white;
`;

const ItemImg = styled.img`
  border-radius: 5px;
  object-fit: cover;
  width: 400px;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
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
  flex-wrap: wrap;
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

const AcceptedPayment = styled.div`
  font-size: 32px;
  margin: 100px 0px -5px 0px;
  border-top: 1px solid black;
`;

const Filler = styled.div`
  background-image: url("../images/surf.jpg");
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgb(48, 48, 48, 0.4);
  padding: 100px;
  color: white;
  font-size: 22px;
  text-decoration: center;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export default ProductDetails;
