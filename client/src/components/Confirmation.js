import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { BiCheckCircle, BiPrinter } from "react-icons/bi";
import { AppContext } from "../components/AppContext";

const Confirmation = () => {
  const { selectedItems, setSelectedItems, formValue, setFormValue } =
    useContext(AppContext);

  const printPageHandler = () => {
    window.print();
  };

  console.log("formValue confirm", formValue);
  return (
    <Wrapper>
      <Column1>
        <OrderConfirmedMsg>
          <BiCheckCircle />
          Order Confirmed
        </OrderConfirmedMsg>
        <p>Thank you for your purchase!</p>
        <div>
          <BiPrinter onClick={printPageHandler} />
        </div>

        <p>Order Number #{formValue.orderNum}</p>
        <p>
          You will be receiving a confirmation email shortly with your order
          details.
        </p>
        <p>Order Summary: </p>
        <p>Date</p>
        <p>
          {formValue.firstName} {formValue.lastName}
        </p>
        <p>{formValue.email}</p>
        <p>
          {formValue.address}, {formValue.city}, {formValue.province},{" "}
          {formValue.country}
        </p>
        <p>
          **** **** **** ****
          {formValue.creditCardNum.slice(formValue.creditCardNum.length - 4)}
        </p>
        <ul>
          <li>purchase item - $12</li>
          <li>purchase item - $12</li>
          <li>purchase item - $12</li>
        </ul>
        <p>Total Paid</p>
      </Column1>
      <Column2></Column2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  margin: -20px 0px;
  padding: 30px;
  display: flex;
  flex-direction: row;
`;

const OrderConfirmedMsg = styled.h2`
  color: green;
`;

const Column1 = styled.div`
  flex: 1;
`;

const Column2 = styled.div`
  flex: 1;
`;

export default Confirmation;
