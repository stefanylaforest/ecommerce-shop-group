import React from "react";
import styled from "styled-components";
import { BiCheckCircle, BiPrinter } from "react-icons/bi";

const Confirmation = () => {
  const printPageHandler = () => {
    window.print();
  };

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

        <p>Order Number #2392184294832988423</p>
        <p>
          You will be receiving a confirmation email shortly with your order
          details.
        </p>
        <p>Order Summary: </p>
        <p>Date</p>
        <p>Name</p>
        <p>Shipping Address</p>
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
