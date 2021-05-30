import React from "react";
import HeroImage from "./Home/HeroImage";
import PopularCategories from "./Home/PopularCategories";
import Brands from "./Home/Brands";
import styled from "styled-components";

const Homepage = () => {
  return (
    <div>
      <HeroImage />
      <Heading>Popular Categories</Heading>
      <PopularCategories />
      <Heading>Our Brands</Heading>
      <Brands />
    </div>
  );
};

const Heading = styled.h3`
  text-align: center;
  color: white;
  margin-top: 130px;
`;

export default Homepage;
