import React, { useContext, useState } from "react";
import Styled from "styled-components";

import { AppContext } from "./AppContext";
import ProductCard from "./ProductCard";

const initialFilters = { brands: ["garmin"] , categories: ["Lifestyle"], bodyLocation: ['head']};

const CollectionPage = () => {
  const { products, setItemsInCart, brands } = useContext(AppContext);

  const [productsFiltered, setProductsFiltered] = useState(products);

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterCahnge = (event) => {
    const filterType = event.target.name;
    const value = event.target.value;
    if (event.target.checked) {
      setFilters({ ...filters, [filterType]: [...filters[filterType], value] });
    } else {
      const newFiltersOfThatType = filters[filterType].filter(
        (i) => i !== value
      );
      const newFilters = { ...filters, [filterType]: newFiltersOfThatType };
      setFilters(newFilters);
    }
  };
  console.log("Filters are:", filters);

  return (
    <Div>
      <div className="filter-box">
        <h2>Filters:</h2>

        <p>Categories</p>
        <details>
          <summary>Brands</summary>
          {brands.map((brand) => (
            <div className="checkbox">
              <input
                type="checkbox"
                value={brand.name}
                name="brands-filter"
                onChange={handleFilterCahnge}
              />
              <lable>{brand.name}</lable>
            </div>
          ))}
        </details>
        <p>Body Location</p>
      </div>
      <div className="wrapper">
        <div className="control-box">
          <select>
            <option>Price: Lowest to Highest</option>
            <option>Price: Highest to Lowest</option>
            <option>A to Z</option>
            <option>Z to A</option>
          </select>
        </div>
        <div className="collection">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </Div>
  );
};

export default CollectionPage;

const Div = Styled.div`

background: lightblue;
display: flex;

.collection {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
}

.control-box {
  display: flex;
  justify-content: flex-end;
}

.filter-box {
  background: lightgreen;
  padding: 1rem;
  flex: 30%;
}

.checkbox {
  padding: 0.1rem;
  border: 2px solid gray;
  border-radius: 10px;
}

.wrapper {
  flex: 70%;
}


`;
