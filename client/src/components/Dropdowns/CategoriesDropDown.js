import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import styled from "styled-components";
import { theme } from "../GlobalStyles";
import { Link } from "react-router-dom";

const CategoriesDropDown = () => {
  const { categories } = useContext(AppContext);

  return (
    <Wrapper>
      <Hover>
        <div>
          <Title tabIndex={0} role="button">
            Shop By Category
          </Title>
        </div>
        <Ulbox className="hoverShow">
          {categories.map((category, i) => (
            <Link to={`/products/?${category}`}>
              <li key={`category-${i}`}>
                <DropDownListItem type="button">{category}</DropDownListItem>
              </li>
            </Link>
          ))}
        </Ulbox>
      </Hover>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  position: relative;
`;

const Ulbox = styled.ul`
  background-color: white;
  border-radius: 5px;
  position: absolute;
  display: none;
  width: 150px;
  z-index:1;
`;

const Hover = styled.div`
  &:hover {
    ${Ulbox} {
      display: block;
    }
  }
`;

const Title = styled.div`
  cursor: pointer;
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

export default CategoriesDropDown;
