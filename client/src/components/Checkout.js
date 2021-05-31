import React, { useState, useContext } from "react";
import styled from "styled-components";
import { theme } from "./GlobalStyles";
import { AppContext } from "../components/AppContext";

const Checkout = () => {
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  return (
    <AllWrapper>
      <PaymentContainer>
        <ContactWrapper>
          <H3>Contact Information</H3>
          <InputDiv>
            <OuterSpan>
              <Input className="inputText" type="text" required />
              <InnerSpan className="floating-label">Email</InnerSpan>
            </OuterSpan>
          </InputDiv>
          <H3>Shipping Address</H3>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <FirstInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">First name</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <SecondInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">Last name</InnerSpan>
              </OuterSpan>
            </InputDiv>
          </InputRow>
          <InputDiv>
            <OuterSpan>
              <Input className="inputText" type="text" required />
              <InnerSpan className="floating-label">Address</InnerSpan>
            </OuterSpan>
          </InputDiv>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <FirstTwoInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">City</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <FirstTwoInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">Province</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <LastInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">Country</InnerSpan>
              </OuterSpan>
            </InputDiv>
          </InputRow>
          <InputDiv>
            <OuterSpan>
              <Input className="inputText" type="text" required />
              <InnerSpan className="floating-label">Phone</InnerSpan>
            </OuterSpan>
          </InputDiv>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <FirstInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">
                  Credit card number
                </InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <SecondInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">Expiry date</InnerSpan>
              </OuterSpan>
            </InputDiv>
          </InputRow>
          <BtnWrapper>
            <Btn className="accentBtn">Confirm Payment</Btn>
          </BtnWrapper>
        </ContactWrapper>
      </PaymentContainer>
      <ViewCartContainer></ViewCartContainer>
    </AllWrapper>
  );
};

const Btn = styled.button`
  text-transform: none;
`;

const BtnWrapper = styled.div`
  margin: 50px 0;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InnerSpan = styled.span`
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 25px;
  transition: 0.2s ease all;
  opacity: 0.6;
  font-size: 0.9rem;
`;

const FirstTwoInput = styled.input`
  font-size: 14px;
  width: 160px;
  height: 40px;
  margin-right: 10px;
  font-size: 1rem;

  &:focus {
    outline-color: ${theme.accentColor};
  }
  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
`;

const LastInput = styled.input`
  font-size: 14px;
  width: 160px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const FirstInput = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;
  margin-right: 10px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const SecondInput = styled.input`
  font-size: 14px;
  width: 245px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const Input = styled.input`
  font-size: 14px;
  width: 500px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    outline-color: ${theme.accentColor};
  }
`;

const OuterSpan = styled.div``;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const H3 = styled.h3`
  margin: 0;
  margin-top: 40px;
  font-weight: 500;
`;

const ContactWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaymentContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ViewCartContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
`;

export default Checkout;
