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
        <Img src={garminLogo} alt="garmin" />
        <Img src={samsungLogo} alt="samsung" />
        <Img src={tomtomLogo} alt="tomtom" />
      </Row>
      <Row>
        <Img src={fitbitLogo} alt="fitbit" />
        <Img src={casioLogo} alt="casio" />
        <Img src={colemanLogo} alt="coleman" />
      </Row>
    </Wrapper>
  );
};

//not done styling

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Img = styled.img`
  width: 216px;

  //not done styling
`;

export default Brands;
