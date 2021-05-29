import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import garminFenix from "../assets/garmin-fenix2-1.png";

const Homepage = () => {
  const { categories, brands, products } = useContext(AppContext);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  //selecting a featured product
  let featuredProductId = 6695;
  //getting the featured product's company details
  const featuredProductBrand = brands.find(
    (brand) => brand._id === featuredProduct.companyId
  );
  //setting the featuredProduct in a state
  useEffect(() => {
    fetch(`api/products/${featuredProductId}`)
      .then((rest) => rest.json())
      .then((json) => setFeaturedProduct(json.data));
  }, []);

  //only way i succeeded to remove unessecary words in the featuredProduct.name; everything else was undefined.
  let strArr = [featuredProduct.name];
  let newStr = strArr.toString();
  let splitFeaturedProductName =
    newStr.split("-")[0] + "-" + newStr.split("-")[1];

  // console.log("feat prod", featuredProduct.imageSrc)

  return (
    <div>
      <Container>
        {featuredProductBrand && (
          <BrandWrapper>
            <Brand>{featuredProductBrand.name}</Brand>
          </BrandWrapper>
        )}
        <ProductWrap>
          <ProductName>{splitFeaturedProductName}</ProductName>
          <ProductImg src={garminFenix} alt={featuredProduct.name} />
          <CallToAction className="accentBtn">View Product</CallToAction>
        </ProductWrap>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProductName = styled.p`
  color: white;
  align-items: flex-start;
  text-transform: capitalize;
  font-weight: 400;
`;

const CallToAction = styled.button`
  width: 20vw;
  align-items: flex-end;
`;

const ProductImg = styled.img`
  align-self: center;
  position: absolute;
  margin-top: 80px;
`;

const BrandWrapper = styled.div`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  display: -webkit-box;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  z-index: -1;
`;

const Brand = styled.h2`
  color: #d9d9d9;
  font-size: 20vw;
  padding: 0px;
  margin: 0px;
`;

export default Homepage;
