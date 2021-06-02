import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Styled from "styled-components";

import { AppContext } from "./AppContext";
import { FilterContext } from "./FilterContext";

import ProductCard from "./ProductCard";
import FilterGroup from "./FilterGroup";
import Pagination from "./Pagination";
import SortDropDown from "./SortDropdown";
import FiltersPanel from "./FiltersPanel";
import OnlyShowInStockProductsCheckBox from "./OnlyShowInStockProductsCheckBox";

const CollectionPage = ({ handleClickOnCartIcon }) => {
  const { products, setItemsInCart } = useContext(AppContext);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  const {
    filters,
    setFilters,
    filteredProducts,
    setFilteredProducts,
    updateFiltersHandler,
    filterProductsPlease,
    isOnlyShowInStockChecked,
    setIsOnlyShowInStockChecked,
    pagination,
    setPagination,
  } = useContext(FilterContext);

  const [sortType, setSortType] = useState("");

  //reseeting states on url change
  useEffect(() => {
    setPagination(1);
  }, [query.get("brand"), query.get("category"), query.get("body_location")]);

  const handleChangeSortType = (event) => {
    setSortType(event.target.value);
  };

  const sortPlease = (arr, type) => {
    if (arr.length === 0) {
      return arr;
    }
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

  const handleOnlyInStockProducts = () => {
    setIsOnlyShowInStockChecked(
      (isOnlyShowInStockChecked) => !isOnlyShowInStockChecked
    );
  };

  return (
    <Div>
      <FiltersPanel className="filters" />
      <div className="wrapper">
        <div className="control-box">
          <OnlyShowInStockProductsCheckBox
            onChangeHandler={handleOnlyInStockProducts}
            isOnlyShowInStockChecked={isOnlyShowInStockChecked}
          />
          <SortDropDown onChangeHandler={handleChangeSortType} />
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-product-message">
            There is no product matching the filters.
          </p>
        )}
        <div className="collection">
          {sortPlease(filteredProducts, sortType)
            //follwoing filter is doing the pagination stuff!
            .filter((product, index) => {
              return index >= (pagination - 1) * 12 && index < pagination * 12;
            })
            .map((product, index) => (
              <ProductCard
                key={"product-card-" + index}
                product={product}
                handleClickOnCartIcon={handleClickOnCartIcon}
              />
            ))}
        </div>
        {filteredProducts && filteredProducts.length > 12 && (
          <Pagination
            numOfPages={
              filteredProducts.length % 12 === 0
                ? filteredProducts.length / 12
                : Math.floor(filteredProducts.length / 12) + 1
            }
            pagination={pagination}
            setPagination={setPagination}
          />
        )}
      </div>
    </Div>
  );
};

export default CollectionPage;

const Div = Styled.div`

padding: 2rem;
display: flex;
justify-content: stretch;
background: white;
gap: 2rem;


.wrapper {
  flex: 1;
}

.no-product-message {
  font-size: 1.3em;
  color: gray;
  margin: 0 auto;
  justify-self: center;
  text-align: center;
  padding: 5rem;
}

.collection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  justify-items: center;
  /* margin: 0 auto; */
}

.control-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-bottom: 2rem;
  gap: 2rem;
}


@media screen and ( max-width: 1400px) {
  .collection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  }

  .control-box {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  gap: 2rem;
  }
}

@media screen and ( max-width: 1080px) {
  .filters {
    display: none;
  }
  .collection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  }

  

  .control-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  gap: 2rem;
  }
}

@media screen and (max-width: 820px) {

  justify-content: center;
  .filters {
    display: none;
  }

  .collection {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  }  

  .control-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 2rem;
  gap: 2rem;
  }
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
