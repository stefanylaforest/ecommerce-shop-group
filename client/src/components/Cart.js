import React, { useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { theme } from "./GlobalStyles";
import { Link } from "react-router-dom";
import { AppContext } from "../components/AppContext";

const Cart = ({ isCartVisible, handleClickOnCartIcon }) => {
  const { selectedItems, setSelectedItems } = useContext(AppContext);

  // let valuesInStorage = Object.values(localStorage);

  let valuesInStorage = Object.entries(localStorage)
    .filter((entry) => entry[0] === "product")
    .map((entry) => entry[1]);

  // console.log(valuesInStorage);
  useEffect(() => {
    //get values as an array in local strage
    if (valuesInStorage.length > 0) {
      valuesInStorage.forEach((item) => {
        let parsedValues = JSON.parse(item);
        console.log(parsedValues);
        selectedItems.push(parsedValues);
        setSelectedItems(selectedItems);
      });
    }
  }, []);

  const handleClickSubtract = (item) => {
    if (item.quantityOfProduct >= 2) {
      const updatedItem = {
        ...item,
        quantityOfProduct: item.quantityOfProduct - 1,
      };
      localStorage.setItem(item.product._id, JSON.stringify(updatedItem));
      let newVersionOfItems = [];
      selectedItems.forEach((e) => {
        if (e.product._id === item.product._id) {
          newVersionOfItems.push(updatedItem);
        } else {
          newVersionOfItems.push(e);
        }
      });
      setSelectedItems(newVersionOfItems);
    }
  };

  const handleClickAdd = (item) => {
    if (item.quantityOfProduct < item.product.numInStock) {
      const updatedItem = {
        ...item,
        quantityOfProduct: item.quantityOfProduct + 1,
      };
      localStorage.setItem(item.product._id, JSON.stringify(updatedItem));
      let newVersionOfItems = [];
      selectedItems.forEach((e) => {
        if (e.product._id === item.product._id) {
          newVersionOfItems.push(updatedItem);
        } else {
          newVersionOfItems.push(e);
        }
      });
      setSelectedItems(newVersionOfItems);
    }
  };

  const handleClickRemove = (item) => {
    localStorage.removeItem(item.product._id);

    let updatedArray = [...selectedItems];
    updatedArray.splice(
      updatedArray.findIndex((i) => i.product._id === item.product._id),
      1
    );
    setSelectedItems(updatedArray);
  };

  let count = 0;
  selectedItems.map((item) => {
    let price = item.product.price;
    let removeDollarSign = price.substr(1);
    return (count =
      count +
      Number(item.quantityOfProduct) * Number(removeDollarSign).toFixed(2));
  });

  return (
    <CartContainer isCartVisible={isCartVisible}>
      <Subject>Your shopping bag</Subject>
      <Icon onClick={handleClickOnCartIcon}>
        <CloseIcon />
      </Icon>
      <Hr />
      <ItemContainer>
        {selectedItems.map((item) => {
          return (
            <ItemWrap key={item.product._id}>
              <ImageWrapper>
                <ItemImage src={item.product.imageSrc} />
              </ImageWrapper>
              <ItemInnerWrap>
                <ItemName>{item.product.name}</ItemName>
                <Price>{item.product.price}</Price>
                <QuantityContainer>
                  <SubtractBtn onClick={() => handleClickSubtract(item)}>
                    -
                  </SubtractBtn>
                  <Quantity>{item.quantityOfProduct}</Quantity>
                  <AddBtn onClick={() => handleClickAdd(item)}>+</AddBtn>
                </QuantityContainer>
                <ItemDeleteIcon onClick={() => handleClickRemove(item)} />
              </ItemInnerWrap>
            </ItemWrap>
          );
        })}
      </ItemContainer>
      <LinkToCheckout
        to={selectedItems[0] && "/checkout"}
        onClick={handleClickOnCartIcon}
      >
        <CheckoutBtn>
          {selectedItems[0]
            ? `CHECK OUT - ${Number(count).toFixed(2)}`
            : "YOUR CART IS EMPTY"}
        </CheckoutBtn>
      </LinkToCheckout>
    </CartContainer>
  );
};

const ItemContainer = styled.div`
  padding-bottom: 30px;
  position: absolute;
  top: 5rem;
  left: 1.5rem;
  width: 476px;
  height: 85%;
  overflow-y: scroll;
`;

const ItemWrap = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%;
  position: relative;
`;

const ItemInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  width: 200px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 180px;
`;

const ItemImage = styled.img`
  float: left;
  object-fit: cover;
`;

const ItemName = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
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
  background-color: #fff;
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
  background-color: #fff;
  padding: 0;

  &:hover {
    background-color: #ced0d0;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

const Price = styled.p`
  margin-top: -5px;
  font-weight: 500;
  font-size: 0.9rem;
`;

const ItemDeleteIcon = styled(FaTimes)`
  position: absolute;
  top: 0;
  right: 30px;
  font-size: 1.4rem;

  &:hover {
    color: ${theme.accentColor};
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;

const CheckoutBtn = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: ${theme.accentColor};
  color: #fff;
  border: none;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${theme.hoverAccentColor};
    cursor: pointer;
  }
`;

const CartContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 500px;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: flex-start;
  top: 0;
  right: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isCartVisible }) => (isCartVisible ? "100%" : "0")};
  right: ${({ isCartVisible }) => (isCartVisible ? "0" : "-100%")};
  box-shadow: ${({ isCartVisible }) =>
    isCartVisible ? "0 0 0 2000px rgb(0,0,0, 0.6)" : "0"};
`;

const Subject = styled.h1`
  font-size: 1.2rem;
  position: absolute;
  top: 0.8rem;
  left: 1.5rem;
  font-weight: bold;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #323232;

  &:hover {
    color: ${theme.accentColor};
    transition: 0.3s ease-out;
  }
`;

const Hr = styled.hr`
  border-top: 1px solid #ced0d0;
  width: 300px;
  position: absolute;
  top: 5rem;
  left: 5%;
  margin: 0 auto;
  width: 90%;
`;

const LinkToCheckout = styled(Link)``;

export default Cart;
