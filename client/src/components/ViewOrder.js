import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "./GlobalStyles";

const ViewOrder = () => {
  const [getValue, setGetValue] = useState("");
  const [getInfo, setGetInfo] = useState({});

  const onChange = (e) => {
    setGetValue(e.target.value);
  };

  return (
    <ViewOrderContainer>
      <TrackWrapper>
        <Heading>TRACK YOUR ORDER</Heading>
        <InputDiv>
          <OuterSpan>
            <Input
              className="inputText"
              type="text"
              name="Order Number"
              required
            />
            <InnerSpan className="floating-label">
              Enter your order-number
            </InnerSpan>
          </OuterSpan>
          <Button className="accentBtn">Track</Button>
        </InputDiv>
        <TrackingInfo>
          <Para>Order #: </Para>
          <Para>Delivery status : </Para>
          <Para>Expected delivery date : </Para>
          <Para>Name :</Para>
          <Para>Email : </Para>
          <Para>Shipping address :  </Para>
        </TrackingInfo>
      </TrackWrapper>
    </ViewOrderContainer>
  );
};

const Para = styled.p`
margin-left: 30px;
`;

const TrackingInfo = styled.div`
margin-top: 30px;
width: 100%;
box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
`;

const Button = styled.button`
  height: 50px;
  width: 120px;
  margin-left: 30px;
`;

const OuterSpan = styled.span`
`;

const InnerSpan = styled.span`
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 26px;
  transition: 0.2s ease all;
  opacity: 0.6;
  font-size: 1.2rem;
`;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const Input = styled.input`
  font-size: 14px;
  width: 70vw;
  max-width: 800px;
  height: 50px;
  font-size: 1.1rem;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -12px;
  }
  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const Heading = styled.h2`
`;

const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 100px 0;
`;

const ViewOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
`;

export default ViewOrder;
