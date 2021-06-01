import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Styled from "styled-components";

import { AppContext } from "./AppContext";
import ProductCard from "./ProductCard";
import FilterGroup from "./FilterGroup";
import Pagination from "./Pagination";
import SortDropDown from "./SortDropdown";

const CollectionPage = ({ handleClickOnCartIcon }) => {
  const {
    products,
    setItemsInCart,
    brands,
    categories,
    wearables: body_locations,
  } = useContext(AppContext);

  const [pagination, setPagination] = useState(1);
  const [sortType, setSortType] = useState("");

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

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

  const filterProducts = (arr) => {
    // console.log("AAAARRR", arr);
    if (!arr) {
      return;
    }
    if (arr.length === 0) {
      return arr;
    }

    let productThatPassCategoryFilter = [];
    let productThatPassBrandFilter = [];
    let productThatPassBodyLocationFilter = [];

    if (filters.brand.length === 0) {
      productThatPassBrandFilter = arr;
    } else {
      productThatPassBrandFilter = arr.filter((product) =>
        filters.brand.includes(
          brands.find((brand) => brand._id === product.companyId)?.name
        )
      );
    }

    if (filters.category.length === 0) {
      productThatPassCategoryFilter = arr;
    } else {
      productThatPassCategoryFilter = arr.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    if (filters.body_location.length === 0) {
      productThatPassBodyLocationFilter = arr;
    } else {
      productThatPassBodyLocationFilter = arr.filter((product) =>
        filters.body_location.includes(product.body_location)
      );
    }

    let productThatPassAllFilters = productThatPassCategoryFilter.filter((p) =>
      productThatPassBodyLocationFilter.includes(p)
    );

    productThatPassAllFilters = productThatPassAllFilters.filter((p) =>
      productThatPassBrandFilter.includes(p)
    );
    return productThatPassAllFilters;
  };

  const handleChangeSortType = (event) => {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log("Now Sort Type is ", event.target.value);
    setSortType(event.target.value);
  };

  const sortPlease = (arr, type) => {
    if (arr.length === 0) {
      return arr;
    }
    // console.log("arr is sortPlease", arr);
    // console.log("type is sortPlease", type);
    let sortedArr;
    switch (type) {
      case "priceLowToHight":
        sortedArr = arr.sort(function (a, b) {
          return (
            Number(a.price.replace("$", "")) - Number(b.price.replace("$", ""))
          );
        });
        break;
      case "priceHightToLow":
        sortedArr = arr.sort(function (a, b) {
          return (
            Number(b.price.replace("$", "")) - Number(a.price.replace("$", ""))
          );
        });
        break;
      case "AtoZ":
        sortedArr = arr.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        break;
      case "ZtoA":
        sortedArr = arr.sort(function (a, b) {
          if (b.name < a.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        return arr;
        break;
    }

    return sortedArr;
  };

  // console.log("filters are:", filters);

  console.log("SOOOOORT TYPE:", sortType);
  console.log("SORT Please", sortPlease(products, sortType));

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
          <SortDropDown onChangeHandler={handleChangeSortType} />
        </div>

        <div className="collection">
          {sortPlease(filterProducts(products), sortType)
            //follwoing filter is doing the pagination stuff!
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
            filterProducts(products).length % 12 === 0
              ? filterProducts(products).length / 12
              : Math.floor(filterProducts(products).length / 12) + 1
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
