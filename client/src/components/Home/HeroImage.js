import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../components/AppContext";
import styled from "styled-components";
import garminFenix from "../../assets/garmin-fenix2-1.png";
import { Link } from "react-router-dom";
import { theme } from "../GlobalStyles";

const HeroImage = () => {
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

  //cutting unnessary words in featuredProduct.name
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
          <New>New</New>
          <ProductName>{splitFeaturedProductName}</ProductName>

          <Link exact to={`/products/${featuredProductId}`}>
            <CallToAction className="accentBtn">View Watch</CallToAction>
          </Link>
          <ProductImg src={garminFenix} alt={featuredProduct.name} />
        </ProductWrap>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  height: 90vh;
`;

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
`;

const ProductName = styled.p`
  color: white;
  align-items: flex-start;
  text-transform: capitalize;
  font-weight: 400;
`;

const New = styled.h3`
  color: white;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: -30px;
  color: ${theme.accentColor};
  margin-top: 70px;
`;

const CallToAction = styled.button`
  width: 20vw;
  position: absolute;
  top: 400px;
`;

const ProductImg = styled.img`
  align-self: center;
  margin-top: -70px;
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

export default HeroImage;
