import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { BiPrinter } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { AppContext } from "../components/AppContext";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
  const { purchased, formValue, setFormValue } = useContext(AppContext);

  const history = useHistory();

  const printPageHandler = () => {
    window.print();
  };

  let count = 0;
  purchased.map((item) => {
    let price = item.product.price;
    let removeDollarSign = price.substr(1);
    return (count =
      count +
      Number(item.quantityOfProduct) * Number(removeDollarSign)).toFixed(2);
  });

  return (
    <Wrapper>
      {" "}
      {formValue.firstName === "" && history.push("/view-order")}
      <Column1>
        <Check>
          <AiFillCheckCircle />
          <OrderConfirmed>Order Confirmed</OrderConfirmed>
        </Check>
        <Instructions>
          {" "}
          <p>Thank you for your purchase!</p>
          <p>
            We will be sending a confirmation email to{" "}
            <Bold>{formValue.email}</Bold> shortly.
          </p>
        </Instructions>
        <Divider />
        <p>
          <Labels>Order Number: </Labels>

          <span>{formValue.orderNum}</span>
        </p>
        <p>
          {" "}
          <Labels>Date: </Labels> <span>{formValue.date}</span>
        </p>

        <p>
          <strong>Name</strong>: {formValue.firstName} {formValue.lastName}
        </p>
        <Labels>Shipping Address: </Labels>
        <ShippingAddress>
          {formValue.address}, {formValue.city}, {formValue.province},{" "}
          {formValue.country}
        </ShippingAddress>
        <p>
          <Labels>
            Credit Card ending with{" "}
            <span>
              {formValue.creditCardNum.slice(
                formValue.creditCardNum.length - 4
              )}
            </span>
          </Labels>
        </p>

        <Products>
          <ul>
            {purchased.map((item) => (
              <Item>
                <p>
                  <Bold>{item.quantityOfProduct}x</Bold> {item.product.name}
                </p>
                <p>{item.product.price}</p>
              </Item>
            ))}
          </ul>
        </Products>
        <Divider />
        <SubTotal>
          <p>Subtotal</p>
          <p>CAD ${Number(count).toFixed(2)}</p>
        </SubTotal>
        <SubTotal>
          <p>Shipping</p>
          <p>Free</p>
        </SubTotal>
        <SubTotal>
          <p>Tax</p>
          <p>CAD ${Number(count * 0.15).toFixed(2)}</p>
        </SubTotal>
        <Divider />
        <Total>
          <p>Total</p>
          <p>CAD ${Number(Number(count) + Number(count) * 0.15).toFixed(2)}</p>
        </Total>
        <button className="accentBtn" onClick={printPageHandler}>
          <BiPrinter /> Print Receipt
        </button>
      </Column1>
      <Column2></Column2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  margin: -20px 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  min-height: 300px;
  font-size: 14px;
`;

const Check = styled.h2`
  color: green;
  text-align: center;
  margin-bottom: -10px;
`;

const OrderConfirmed = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-top: -10px;
`;

const Instructions = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Products = styled.div`
  font-size: 14px;
`;

const ShippingAddress = styled.p`
  font-weight: 700;
`;

const Bold = styled.span`
  font-weight: 700;
  color: black;
  font-size: 14px;
`;

const Labels = styled.span`
  font-weight: 700;
`;

const Column1 = styled.div`
  flex: 1;
  margin-left: 10px;
  padding: 80px;
`;

const Column2 = styled.div`
  flex: 1;
  background-image: url("/images/confirmimg.jpg");
  background-size: cover;
  background-position: bottom;
  overflow-x: hidden;
  background-repeat: no-repeat;

  @media screen and (max-width: 820px) {
    display: none !important;
  }
`;

const Divider = styled.hr`
  border: 0.5px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: -12px;
`;

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
`;

const SubTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: -30px;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 400;
`;

export default Confirmation;
