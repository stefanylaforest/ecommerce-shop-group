import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import garminLogo from "../../assets/garmin-logo.png";
import samsungLogo from "../../assets/samsung.png";
import tomtomLogo from "../../assets/tomtom.png";
import fitbitLogo from "../../assets/fitbit.png";
import casioLogo from "../../assets/casio-logo.png";
import colemanLogo from "../../assets/coleman.png";

const Brands = () => {
  return (
    <Wrapper>
      <Row>
        <Link to="/products?brand=Garmin">
          <ImgDiv>
            <Img
              style={{
                width: "216px",
                height: "53px",
              }}
              src={garminLogo}
              alt="garmin"
            />
          </ImgDiv>
        </Link>
        <Link to="/products?brand=Samsung">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "88px" }}
              src={samsungLogo}
              alt="samsung"
            />
          </ImgDiv>
        </Link>
        <Link to="/products?brand=Tomtom">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "33px" }}
              src={tomtomLogo}
              alt="tomtom"
            />
          </ImgDiv>
        </Link>
      </Row>
      <Row>
        <Link to="/products?brand=Fitbit">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "54px" }}
              src={fitbitLogo}
              alt="fitbit"
            />
          </ImgDiv>
        </Link>
        <Link to="/products?brand=Casio">
          <ImgDiv>
            <Img
              style={{ width: "216px", height: "33px" }}
              src={casioLogo}
              alt="casio"
            />
          </ImgDiv>
        </Link>
        <Link to="/products?brand=Coleman">
          <ImgDiv>
            <Img
              style={{
                width: "216px",
                height: "71px",
              }}
              src={colemanLogo}
              alt="coleman"
            />
          </ImgDiv>
        </Link>
      </Row>
    </Wrapper>
  );
};

//not done styling

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 100px 100px 100px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;

const ImgDiv = styled.div`
  width: 250px;
  margin: 20px 0px;
`;
const Img = styled.img`
  //not done styling
`;

export default Brands;
