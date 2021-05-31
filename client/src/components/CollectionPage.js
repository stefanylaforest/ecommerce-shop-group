import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Styled from "styled-components";

import { AppContext } from "./AppContext";
import ProductCard from "./ProductCard";
import FilterGroup from "./FilterGroup";

const CollectionPage = ({ handleClickOnCartIcon }) => {
  const {
    products,
    setItemsInCart,
    brands,
    categories,
    wearables: body_locations,
  } = useContext(AppContext);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  console.log("brands", brands);

  const initialFilters = {
    brand: query.get("brand") ? [query.get("brand")] : [],
    category: query.get("category") ? [query.get("category")] : [],
    body_location: query.get("body_location")
      ? [query.get("body_location")]
      : [],
  };

  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    setFilters(initialFilters);
    console.log("setting again");
  }, [query.get("brand"), query.get("category"), query.get("body_location")]);

  const fakeHandle = () => {
    console.log("FAKE HANDLEING");
  };

  const handleFilterChange = (event) => {
    console.log("Handling Changes");
    updateFilters(event);
  };

  const updateFilters = (event) => {
    const filterType = event.target.name;
    const value = event.target.value;
    if (event.target.checked) {
      setFilters({
        ...filters,
        [filterType]: [...filters[filterType], value],
      });
    } else {
      const newFiltersOfThatType = filters[filterType].filter(
        (i) => i !== value
      );
      const newFilters = { ...filters, [filterType]: newFiltersOfThatType };
      setFilters(newFilters);
    }
  };

  const filterProducts = () => {
    let productThatPassCategoryFilter = [];
    let productThatPassBrandFilter = [];
    let productThatPassBodyLocationFilter = [];

    if (filters.brand.length === 0) {
      productThatPassBrandFilter = products;
    } else {
      productThatPassBrandFilter = products.filter((product) =>
        filters.brand.includes(
          brands.find((brand) => brand._id === product.companyId)?.name
        )
      );
      console.log("passed brand", productThatPassBrandFilter);
    }

    if (filters.category.length === 0) {
      productThatPassCategoryFilter = products;
    } else {
      productThatPassCategoryFilter = products.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    if (filters.body_location.length === 0) {
      productThatPassBodyLocationFilter = products;
    } else {
      productThatPassBodyLocationFilter = products.filter((product) =>
        filters.body_location.includes(product.body_location)
      );
    }

    let productThatPassAllFilters = productThatPassCategoryFilter.filter((p) =>
      productThatPassBodyLocationFilter.includes(p)
    );

    productThatPassAllFilters = productThatPassAllFilters.filter((p) =>
      productThatPassBrandFilter.includes(p)
    );

    //

    console.log("ALLLLL", productThatPassAllFilters);

    return productThatPassAllFilters;

    // if (
    //   filters.brands.length === 0 &&
    //   filters.categories.length === 0 &&
    //   filters.bodyLocation.length === 0
    // ) {
    //   console.log('HEEEEEEEEEEEERER');
    //   return products;
    // } else {

    //   let productThatPassCategoryFilter = products.filter((product) =>
    //     filters.categories.includes(product.category)
    //   );
    //   return productThatPassCategoryFilter;
    // }
  };

  console.log("filters are:", filters);

  return (
    <Div>
      {/* 
      <div className="filter-box">
        <h2>Filters:</h2>
        <FilterGroup
          title="Categories"
          type="category"
          optionsNames={categories}
          optionsValues={categories}
          handleFilterChange={handleFilterChange}
          selectedOptions={filters.category}
        />
        <FilterGroup
          title="Brands"
          type="brand"
          optionsNames={brands.map((brand) => brand.name)}
          optionsValues={brands.map((brand) => brand.name)}
          handleFilterCahnge={handleFilterChange}
          selectedOptions={filters.brand}
        />
        <FilterGroup
          title="Body Location"
          type="body_location"
          optionsNames={body_locations}
          optionsValues={body_locations}
          handleFilterChange={handleFilterChange}
          selectedOptions={filters.body_location}
        />
      </div>
         */}
      <div className="wrapper">
        <div className="control-box">
          <select className="sort-dropdown">
            <option>Price: Lowest to Highest</option>
            <option>Price: Highest to Lowest</option>
            <option>A to Z</option>
            <option>Z to A</option>
          </select>
        </div>
        <div className="collection">
          {filterProducts().map((product, index) => (
            <ProductCard
              key={"product-card-" + index}
              product={product}
              handleClickOnCartIcon={handleClickOnCartIcon}
            />
          ))}
        </div>
      </div>
    </Div>
  );
};

export default CollectionPage;

const Div = Styled.div`

padding: 2rem;
display: flex;

.collection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
}

.control-box {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
}


.sort-dropdown {
  padding: 1rem;
  border-radius: 5px;
  border: none;
  appearance: none;

  option {
    padding: 1rem;
    background: #ffffff;
  }
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
`;
