import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import styled from "styled-components";
import { theme } from "../GlobalStyles";
import { Link } from "react-router-dom";

const BrandDropDown = () => {
  const { brands } = useContext(AppContext);

  let allBrands = Object.values(brands);
  allBrands = allBrands.map((brand) => {
    return brand.name;
  });

  return (
    <Wrapper>
      <Hover>
        <div>
          <Title tabIndex={0} role="button">
            Shop By Brand
          </Title>
        </div>
        <Ulbox>
          {allBrands.slice(0, 6).map((brandName, i) => (
            <Link to={`/brand/?${brandName}`}>
              <li key={`brand-${i}`}>
                <DropDownListItem type="button">{brandName}</DropDownListItem>
              </li>
            </Link>
          ))}
          <Link to={`/`}>
            <DropDownListItem>View All</DropDownListItem>
          </Link>
        </Ulbox>
      </Hover>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  position: relative;
`;

const Title = styled.div`
  cursor: pointer;
`;

const Ulbox = styled.ul`
  background-color: white;
  border-radius: 5px;
  position: absolute;
  width: 150px;
  display: none;
  z-index: 1;
`;

const Hover = styled.div`
  &:hover {
    ${Ulbox} {
      display: block;
    }
  }
`;

const DropDownListItem = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  padding: 5px 5px 5px 10px;
  font-size: 14px;
  text-transform: uppercase;
  &:hover {
    color: ${theme.accentColor};
  }
`;

export default BrandDropDown;
