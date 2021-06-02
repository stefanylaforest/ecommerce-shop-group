import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./GlobalStyles";
import { AppContext } from "../components/AppContext";
import { errorMessages } from "../settings";

const Checkout = () => {
  const [errMessage, setErrMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [disabled, setDisabled] = useState(true);
  const {
    selectedItems,
    setSelectedItems,
    formValue,
    setFormValue,
    purchased,
    setPurchased,
  } = useContext(AppContext);
  const history = useHistory();

  //to add to req.body -> example of what it will look like:
  //starts with product id, then name, then price, then amount purchased
  // itemsPurchased: [
  //   '6623 Casio A168W-1 Mens Classic Digital Electro Luminescence Bracelet Wrist Watch; Silver $13.99 1',
  //   '6695 Garmin fenix 2 - Hiking, running GPS watch - 1.2" monochrome - 70 x 70 $399.99 1'
  // ]

  let itemsPurchased = [];
  selectedItems.forEach((item) => {
    itemsPurchased.push(
      item.product._id +
        " " +
        item.product.name +
        " " +
        item.product.price +
        " " +
        item.quantityOfProduct
    );
  });

  useEffect(() => {
    Object.values(formValue).includes("")
      ? setDisabled(true)
      : setDisabled(false);
  }, [formValue, setDisabled]);

  const handleFormChange = (value, name) => {
    setFormValue({ ...formValue, [name]: value, itemsPurchased });
    setErrMessage("");
  };

  const updateInventory = () => {
    selectedItems.forEach((item) => {
      fetch(`api/products/${item.product._id}/update`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedQuantityNum: item.quantityOfProduct }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  };

  const createOrderHandler = () => {
    setStatus("pending");

    fetch("/api/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        const { status, error } = data;
        console.log("status", status);

        if (status === "success") {
          setStatus("confirmed");
          setPurchased(selectedItems);
          updateInventory();
          setSelectedItems([]);
          localStorage.clear();
          localStorage.setItem(formValue.orderNum, JSON.stringify(formValue));
          history.push("/confirmation");
        } else if (error) {
          setStatus("error");
          setErrMessage(errorMessages[error]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  let count = 0;
  selectedItems.map((item) => {
    let price = item.product.price;
    let removeDollarSign = price.substr(1);
    return (count =
      count +
      Number(item.quantityOfProduct) * Number(removeDollarSign)).toFixed(2);
  });

  return (
    <AllWrapper>
      <PaymentContainer>
        <ContactWrapper>
          <H3>Contact Information</H3>
          <InputDiv>
            <OuterSpan>
              <Input
                className="inputText"
                type="text"
                name="email"
                required
                onChange={(ev) => handleFormChange(ev.target.value, "email")}
              />
              <InnerSpan className="floating-label">Email</InnerSpan>
            </OuterSpan>
          </InputDiv>
          <H3>Shipping Address</H3>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <FirstInput
                  className="inputText"
                  type="text"
                  name="fistName"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "firstName")
                  }
                />
                <InnerSpan className="floating-label">First name</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <SecondInput
                  className="inputText"
                  type="text"
                  name="lastName"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "lastName")
                  }
                />
                <InnerSpan className="floating-label">Last name</InnerSpan>
              </OuterSpan>
            </InputDiv>
          </InputRow>
          <InputDiv>
            <OuterSpan>
              <Input
                className="inputText"
                type="text"
                name="address"
                required
                onChange={(ev) => handleFormChange(ev.target.value, "address")}
              />
              <InnerSpan className="floating-label">Address</InnerSpan>
            </OuterSpan>
          </InputDiv>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <FirstTwoInput
                  className="inputText"
                  type="text"
                  name="city"
                  required
                  onChange={(ev) => handleFormChange(ev.target.value, "city")}
                />
                <InnerSpan className="floating-label">City</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <FirstTwoInput
                  className="inputText"
                  type="text"
                  name="province"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "province")
                  }
                />
                <InnerSpan className="floating-label">Province</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <LastInput
                  className="inputText"
                  type="text"
                  name="country"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "country")
                  }
                />
                <InnerSpan className="floating-label">Country</InnerSpan>
              </OuterSpan>
            </InputDiv>
          </InputRow>
          <InputDiv>
            <OuterSpan>
              <Input
                className="inputText"
                type="text"
                name="phone"
                required
                onChange={(ev) =>
                  handleFormChange(ev.target.value, "phoneNumber")
                }
              />
              <InnerSpan className="floating-label">Phone</InnerSpan>
            </OuterSpan>
          </InputDiv>
          <InputRow>
            <InputDiv>
              <OuterSpan>
                <FirstInput
                  className="inputText"
                  type="text"
                  name="creditCardNumber"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "creditCardNum")
                  }
                />
                <InnerSpan className="floating-label">
                  Credit card number
                </InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <SecondInput
                  className="inputText"
                  type="text"
                  name="expiryDate"
                  required
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "expirationDate")
                  }
                />
                <InnerSpan className="floating-label">Expiry date</InnerSpan>
              </OuterSpan>
            </InputDiv>
          </InputRow>
          {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}
          <BtnWrapper onClick={createOrderHandler}>
            <Btn className="accentBtn">Confirm Payment</Btn>
          </BtnWrapper>
        </ContactWrapper>
      </PaymentContainer>
      <ViewCartContainer>
        <CartContainer>
          <ItemsContainer>
            {selectedItems.map((item) => {
              return (
                <ItemContainer>
                  <ImageWrapper>
                    <ItemImage src={item.product.imageSrc} />
                  </ImageWrapper>
                  <Quantity>{item.quantityOfProduct}</Quantity>
                  <ItemName>{item.product.name}</ItemName>
                  <ItemPrice>{item.product.price}</ItemPrice>
                </ItemContainer>
              );
            })}
          </ItemsContainer>
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
            <p>
              CAD ${Number(Number(count) + Number(count) * 0.15).toFixed(2)}
            </p>
          </Total>
        </CartContainer>
      </ViewCartContainer>
    </AllWrapper>
  );
};

const ItemPrice = styled.p``;

const ItemName = styled.p`
  width: 300px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Quantity = styled.p`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  font-size: 13px;
  transform: translate(-15px, -50px);
  background-color: #454e51;
  color: #fff;
  border-radius: 50%;
`;

const ItemImage = styled.img`
  width: 80px;
`;

const ImageWrapper = styled.div``;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const ItemsContainer = styled.div`
  height: 420px;
  overflow: scroll;
`;

const CartContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

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
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 30px;

  @media screen and (max-width: 1020px) {
    justify-content: center;
  }
`;

const ViewCartContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 30px;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

const AllWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
`;

const Divider = styled.hr`
  border: 0.5px solid black;
  width: 100%;
  margin-top: 20px;
  margin-bottom: -12px;
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

export default Checkout;
