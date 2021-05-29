import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { theme } from "./GlobalStyles";
import Image1 from "../assets/garmin-fenix2.png";
import {Link} from 'react-router-dom'

const handleClickSubtract = () => {};

const handleClickAdd = () => {};

const Cart = ({ isCartVisible, handleClickOnCartIcon }) => {
  return (
    <CartContainer isCartVisible={isCartVisible}>
      <Subject>Your shopping bag</Subject>
      <Icon onClick={handleClickOnCartIcon}>
        <CloseIcon />
      </Icon>
      <Hr />
      <ItemContainer>
        <ItemWrap>
          <ItemImage src={Image1} />
          <ItemInnerWrap>
            <ItemName>super power watch</ItemName>
            <Price>$39.00</Price>
            <QuantityContainer>
              <SubtractBtn>-</SubtractBtn>
              <Quantity>1</Quantity>
              <AddBtn>+</AddBtn>
            </QuantityContainer>
            <ItemDeleteIcon />
          </ItemInnerWrap>
        </ItemWrap>
      </ItemContainer>
      <LinkToCheckout to="/checkout">
      <CheckoutBtn>CHECK OUT - PRICE</CheckoutBtn>
      </LinkToCheckout>
    </CartContainer>
  );
};

const ItemContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: 1.5rem;
  width: 450px;
`;

const ItemWrap = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  position: relative;
`;

const ItemInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

const ItemImage = styled.img`
  float: left;
  width: 120px;
  height: 180px;
  object-fit: cover;
`;

const ItemName = styled.p`
  font-size: 1.1rem;
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
`;

const ItemDeleteIcon = styled(FaTimes)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.4rem;

  &:hover {
    color: ${theme.accentColor};
    transition: 0.3s ease-out;
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
  transition: 0.3s ease-in-out;
  opacity: ${({ isCartVisible }) => (isCartVisible ? "100%" : "0")};
  right: ${({ isCartVisible }) => (isCartVisible ? "0" : "-100%")};
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

const LinkToCheckout = styled(Link)`
`;

export default Cart;
