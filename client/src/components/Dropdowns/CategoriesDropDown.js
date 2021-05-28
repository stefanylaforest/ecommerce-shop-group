import React, { useState, useContext } from "react";
import { FaToggleOff } from "react-icons/fa";
import { AppContext } from "../AppContext";
import styled from "styled-components";
import { theme } from "../GlobalStyles";
import { Link } from "react-router-dom";

const CategoriesDropDown = () => {
  const [open, setOpen] = useState(false);
  const { categories } = useContext(AppContext);

  const toggle = () => setOpen(!open);

  return (
    <Wrapper>
      <div>
        <Title
          tabIndex={0}
          role="button"
          onKeyPress={() => toggle(!open)}
          onMouseEnter={() => toggle(!open)}
        >
          Shop By Category
        </Title>
      </div>
      {open && (
        <Ulbox onMouseLeave={() => toggle(!open)}>
          {categories.map((category, i) => (
            <Link to={`/products/?${category}`}>
              <li key={`category-${i}`}>
                <DropDownListItem type="button" onClick={() => toggle(!open)}>
                  {category}
                </DropDownListItem>
              </li>
            </Link>
          ))}
        </Ulbox>
      )}
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
