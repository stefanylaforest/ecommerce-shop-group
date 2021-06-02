import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../components/AppContext";
import styled from "styled-components";
import garminFenix from "../../assets/garmin-fenix2-1.png";
import garminFenix1 from "../../assets/garmin-fenix2.png";
import garminFenix2 from "../../assets/garmin-fenix.png";
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
      .then((res) => res.json())
      .then((json) => setFeaturedProduct(json.data));
  }, []);

  //cutting unnessary words in featuredProduct.name
  let strArr = [featuredProduct.name];
  let newStr = strArr.toString();
  let splitFeaturedProductName =
    newStr.split("-")[0] + "-" + newStr.split("-")[1];

  const [bgImage, handleImage] = useState(garminFenix);

  window.addEventListener("mousemove", function (e) {
    let windowWidth = window.innerWidth;

    if (e.x < 0.4 * windowWidth) {
      handleImage(garminFenix);
    }

    if (e.x > 0.4 * windowWidth && e.x < 0.6 * windowWidth) {
      handleImage(garminFenix1);
    }

    if (e.x > 0.6 * windowWidth) {
      handleImage(garminFenix2);
    }
  });

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
          <ProductImg
            className="inline-css show-on-scroll"
            src={bgImage}
            alt={featuredProduct.name}
          />
        </ProductWrap>
      </Container>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  /* margin: 50px; */
  max-width: 1200px;
  align-self: center;
  margin: 0 auto;
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

  @media screen and (max-width: 1040px) {
    transform: translateY(-50px);
    transition: 0.2s ease-out;
  }
`;

const New = styled.h3`
  color: white;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: -30px;
  color: ${theme.accentColor};
  margin-top: 70px;

  @media screen and (max-width: 880px) {
    transform: translateY(-50px);
    transition: 0.2s ease-out;
  }
`;

const CallToAction = styled.button`
  width: 150px;
  position: absolute;
  top: 400px;

  @media screen and (max-width: 880px) {
    transform: translateY(100px);
    transition: 0.2s ease-out;
  }
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
  color: white;
  font-size: 250px;
  padding: 0px;
  margin: 0px;
  transition: 0.2s ease-out;

  @media screen and (max-width: 1150px) {
    font-size: 200px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default HeroImage;
