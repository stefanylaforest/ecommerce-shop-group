import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Styled from "styled-components";

import { AppContext } from "./AppContext";
import ProductCard from "./ProductCard";
import FilterGroup from "./FilterGroup";
import Pagination from "./Pagination";

const CollectionPage = ({ handleClickOnCartIcon }) => {
  const {
    products,
    setItemsInCart,
    brands,
    categories,
    wearables: body_locations,
  } = useContext(AppContext);

  const [pagination, setPagination] = useState(1);

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
    setPagination(1);
  }, [query.get("brand"), query.get("category"), query.get("body_location")]);

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

  console.log("Page is ", pagination);
  console.log((pagination - 1)* 12);
  console.log((pagination ) * 12 + 1);


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
          {filterProducts()
            .filter((product, index) => {
              return (
                index > (pagination - 1) * 12 && index < pagination * 12 + 1
              );
            })
            .map((product, index) => (
              <ProductCard
                key={"product-card-" + index}
                product={product}
                handleClickOnCartIcon={handleClickOnCartIcon}
              />
            ))}
        </div>
        <Pagination
          numOfPages={
            filterProducts().length % 12 === 0
              ? filterProducts().length / 12
              : (Math.floor(filterProducts().length / 12) + 1)
          }
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>
    </Div>
  );
};

export default CollectionPage;

const Div = Styled.div`

padding: 2rem;
display: flex;
justify-content: center;
background: white;

.collection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  /* margin: 0 auto; */
}
@media screen and ( max-width: 1400px) {
  .collection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  }
}
@media screen and ( max-width: 1080px) {
  .collection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}
}

@media screen and (max-width: 820px) {
  .collection {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
}

.control-box {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
}


.sort-dropdown {
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 5px;
  /* border: 3px solid gray; */
  border: none;
  background: #dddddd;
  appearance: none;
  /* background: ; */
  color: gray;
  font-size:1.2em;
  font-weight: 700;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  option {
    /* padding: 1rem; */
    color: white;
    background: #454e51;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
