import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "./GlobalStyles";
import moment from "moment";

const ViewOrder = () => {
  const [getValue, setGetValue] = useState("");
  const [getInfo, setGetInfo] = useState("");
  const [isClick, setIsClick] = useState(false);

  const onChange = (e) => {
    setGetValue(e.target.value);
    setIsClick(false);
  };

  let getKeyInlocalstorage = Object.keys(localStorage);

  const handleClickTrack = () => {
    if (getValue === getKeyInlocalstorage[0]) {
      const valuesInStorage = localStorage.getItem(getValue.toString());
      const parsedValues = JSON.parse(valuesInStorage);
      setGetInfo(parsedValues);
    }
    setIsClick(true);
  };


  return (
    <ViewOrderContainer>
      <TrackWrapper>
        <Heading>TRACK YOUR ORDER</Heading>
        <InputDiv>
          <OuterSpan>
            <Input
              onChange={onChange}
              className="inputText"
              type="text"
              name="Order Number"
              required
            />
            <InnerSpan className="floating-label">
              Enter your order-number
            </InnerSpan>
          </OuterSpan>
          <Button className="accentBtn" onClick={handleClickTrack}>
            Track
          </Button>
        </InputDiv>
        {getValue === getKeyInlocalstorage[0] && isClick ? (
          <TrackingInfo isClick={isClick}>
            <Para>
              <strong>

                <em>Order Number:</em>

              </strong>{" "}
              {getInfo.orderNum}
            </Para>
            <Para>
              <strong>

                <em>Delivery Status: </em>


              </strong>{" "}
              In transit
            </Para>
            <Para>
              <strong>

                <em>Expected Delivery-Date: </em>

              </strong>{" "}
              {moment().add(7, "d").format("dddd, MMMM Do YYYY")}
            </Para>
            <Para>
              <strong>

                <em>Name: </em>

              </strong>{" "}
              {getInfo.firstName} {getInfo.lastName}
            </Para>
            <Para>
              <strong>

                <em>Email: </em>

              </strong>{" "}
              {getInfo.email}
            </Para>
            <Para>
              <strong>

                <em>Shipping Address: </em>

              </strong>{" "}
              {getInfo.address}, {getInfo.city}
            </Para>
          </TrackingInfo>
        ) : (
          <TrackingInfo isClick={isClick}>
            <FalsePara>
              <strong>{getValue}</strong> not found
            </FalsePara>
          </TrackingInfo>
        )}
      </TrackWrapper>
    </ViewOrderContainer>
  );
};

const FalsePara = styled.p`
  margin-left: 30px;
`;

const Para = styled.p`
  margin-left: 30px;
`;

const TrackingInfo = styled.div`
  visibility: ${({ isClick }) => (isClick ? "visible" : "")};
  opacity: ${({ isClick }) => (isClick ? "1" : "0")};
  transform: ${({ isClick }) => (isClick ? "scale(1)" : "scale(0)")};
  margin-top: 30px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
  transition: 1s ease-in-out;
`;

const Button = styled.button`
  height: 50px;
  width: 120px;
  margin-left: 30px;
`;

const OuterSpan = styled.span``;

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
  margin-bottom: 50px;
`;

const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 0 100px 0;
  height: 700px;
`;

const ViewOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
`;

export default ViewOrder;
