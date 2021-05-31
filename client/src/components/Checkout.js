import React from "react";
import styled from "styled-components";

const Checkout = () => {
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
                <NameInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">First name</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <NameInput className="inputText" type="text" required />
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
                <AddressInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">City</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <AddressInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">Province</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <AddressInput className="inputText" type="text" required />
                <InnerSpan className="floating-label">Country</InnerSpan>
              </OuterSpan>
            </InputDiv>
          </InputRow>
        </ContactWrapper>
      </PaymentContainer>
      <ViewCartContainer></ViewCartContainer>
    </AllWrapper>
  );
};

const InputRow = styled.div`
  display: flex;
`;

const InnerSpan = styled.span`
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 23px;
  transition: 0.2s ease all;
`;

const AddressInput = styled.input`
  font-size: 14px;
  width: 166.66px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -6px;
  }
`;

const NameInput = styled.input`
  font-size: 14px;
  width: 250px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -6px;
  }
`;

const Input = styled.input`
  font-size: 14px;
  width: 500px;
  height: 40px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -6px;
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
`;

const ContactWrapper = styled.div`
  width: 100%;
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
`;

export default Checkout;
