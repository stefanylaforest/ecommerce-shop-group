import React, { useContext, useState } from "react";
import Styled from "styled-components";

import { AppContext } from "./AppContext";
import ProductCard from "./ProductCard";
import FilterGroup from "./FilterGroup";

const initialFilters = {
  brands: ["garmin"],
  categories: ["Lifestyle"],
  bodyLocation: ["head"],
};

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

      filterProducts();
    }
  };

  const filterProducts = () => {
    let passed = [];

    filters.brands.forEach(brand => {
      products.forEach(product => {
        if (product.brand === brand) {
          passed.push(product);
        }
      })
    });

    return passed;

  }

  console.log("Filters are:", filters);

  return (
    <Div>
      <div className="filter-box">
        <h2>Filters:</h2>

        {/* <FilterGroup title="Categories" type="categories" options={categories}  handleFilterChange={handleFilterCahnge} /> */}
        <FilterGroup
          title="Brands"
          type="brands"
          options={brands.map((brand) => brand.name)}
          handleFilterCahnge={handleFilterCahnge}
        />
        {/* <FilterGroup title='Body Location' type="bodyLocation" options={brands.map(brand => brand.name)}  handleFilterChange={handleFilterCahnge} /> */}
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
          {products.map((product, index) => (
            <ProductCard key={"product-card-" + index} product={product} />
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
