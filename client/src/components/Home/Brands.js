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
        <ImgDiv>
          <Img
            style={{ width: "216px", height: "53px" }}
            src={garminLogo}
            alt="garmin"
          />
        </ImgDiv>
        <ImgDiv>
          <Img
            style={{ width: "216px", height: "88px" }}
            src={samsungLogo}
            alt="samsung"
          />
        </ImgDiv>
        <ImgDiv>
          <Img
            style={{ width: "216px", height: "33px" }}
            src={tomtomLogo}
            alt="tomtom"
          />
        </ImgDiv>
      </Row>
      <Row>
        <ImgDiv>
          <Img
            style={{ width: "216px", height: "54px" }}
            src={fitbitLogo}
            alt="fitbit"
          />
        </ImgDiv>
        <ImgDiv>
          <Img
            style={{ width: "216px", height: "33px" }}
            src={casioLogo}
            alt="casio"
          />
        </ImgDiv>
        <ImgDiv>
          <Img
            style={{ width: "216px", height: "83px", borderRadius: "7px" }}
            src={colemanLogo}
            alt="coleman"
          />
        </ImgDiv>
      </Row>
    </Wrapper>
  );
};

//not done styling

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px 0px;
  align-items: center;
`;

const ImgDiv = styled.div`
  width: 250px;
`;
const Img = styled.img`
  //not done styling
`;

export default Brands;
