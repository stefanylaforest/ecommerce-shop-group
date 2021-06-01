import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const AllBrandsPage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/api/brands")
      .then((res) => res.json())
      .then((res) => {
        setBrands(res.data);
      });
  }, []);

  return (
    <Div>
      {/* <h2>Brands</h2> */}
      <ul className="brands-list">
        {brands
          .sort((a, b) => {
            return a.name > b.name;
          })
          .map((brand) => {
            return (
              <li className="brand-name">
                <Link to={"/products?brand=" + brand.name}>{brand.name}</Link>
              </li>
            );
          })}
      </ul>
    </Div>
  );
};

export default AllBrandsPage;

const Div = Styled.div`

padding: 3rem;
display: flex;
justify-content: center;
/* flex-direction: column; */
background: white;

.brands-list {
    column-count: 3;
}

@media screen and ( max-width: 1080px) {
    .brands-list {
    column-count: 2;
}
}

@media screen and (max-width: 820px) {
    .brands-list {
    column-count: 1;
}
}

.brand-name {
    color: white;
    font-size: 1.5em;
    font-weight: 700;

    a {
        color: black;
        &:hover {
            text-decoration: underline;
        }
    }
}


`;
