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
      <HeadingBrand>Popular Brands</HeadingBrand>
      <Brands />
    </div>
  );
};

const HeadingBrand = styled.h3`
  text-align: center;
  color: white;
  margin-top: 130px;
  margin-bottom: -30px;
`;

const Heading = styled.h3`
  text-align: center;
  color: white;
  margin-top: 130px;
  margin-bottom: 50px;
`;

export default Homepage;
