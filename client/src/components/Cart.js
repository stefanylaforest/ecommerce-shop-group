import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { theme } from "./GlobalStyles";

const Cart = ({ isCartVisible, handleClickOnCartIcon }) => {
  return (
    <CartContainer
      isCartVisible={isCartVisible}
      onClick={handleClickOnCartIcon}
    >
      <Subject>Your shopping bag</Subject>
      <Icon onClick={handleClickOnCartIcon}>
        <CloseIcon />
      </Icon>
      <Hr />
      <ItemContainer>
        <ItemWrap>
          <ItemImage />
          <ItemName>super magic cleanser</ItemName>
          <QuantityContainer>
            <SubtractBtn>-</SubtractBtn>
            <Quantity>1</Quantity>
            <AddBtn>+</AddBtn>
          </QuantityContainer>
          <Price>$39.00</Price>
          <ItemDeleteIcon />
        </ItemWrap>
      </ItemContainer>
    </CartContainer>
  );
};

const ItemContainer = styled.div`
  position: absolute;
  top: 4rem;
  left: 1.5rem;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const ItemImage = styled.img`
  float: left;
`;

const ItemName = styled.h3`
  font-size: 1rem;
`;

const QuantityContainer = styled.div`
display: flex;
`;

const SubtractBtn = styled.button``;

const Quantity = styled.p``;

const AddBtn = styled.button``;

const Price = styled.h3``;

const ItemDeleteIcon = styled(FaTimes)``;

const CartContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 400px;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: flex-start;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  /* opacity: ${({ isCartVisible }) => (isCartVisible ? "100%" : "0")};
  right: ${({ isCartVisible }) => (isCartVisible ? "0" : "-100%")}; */
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
border-top: 1px solid rgb(0,0,0, 1)
width: 300px;
position: absolute;
top: 5rem;
left: 5%;
margin: 0 auto;
width: 90%;

`;

export default Cart;
