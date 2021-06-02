import React, { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "./AppContext";

export const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  //creating initialFilters &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  const {
    products,
    brands,
    categories,
    wearables: body_locations,
  } = useContext(AppContext);

  const createInitialFilter = () => {
    const initialFilters = {
      brand: {},
      category: {},
      body_location: {},
    };

    brands.forEach((brand) => {
      initialFilters.brand = {
        ...initialFilters.brand,
        [brand.name.toLowerCase()]: false,
      };
    });
    categories.forEach((category) => {
      initialFilters.category = {
        ...initialFilters.category,
        [category.toLowerCase()]: false,
      };
    });
    body_locations.forEach((body_location) => {
      initialFilters.body_location = {
        ...initialFilters.body_location,
        [body_location.toLowerCase()]: false,
      };
    });
    if (query.get("brand")) {
      initialFilters.brand[query.get("brand").toLowerCase()] = true;
    }
    if (query.get("category")) {
      initialFilters.category[query.get("category").toLowerCase()] = true;
    }
    if (query.get("body_location")) {
      initialFilters.body_location[
        query.get("body_location").toLowerCase()
      ] = true;
    }

    return initialFilters;
  };

  // creating statetes $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isOnlyShowInStockChecked, setIsOnlyShowInStockChecked] =
    useState(false);
  const [pagination, setPagination] = useState(1);

  //resetting states on url change
  useEffect(() => {
    const readyInitialState = createInitialFilter();
    setFilters(readyInitialState);
  }, [
    query.get("brand"),
    query.get("category"),
    query.get("body_location"),
    brands,
    categories,
    body_locations,
  ]);

  // updating filteres $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  const updateFiltersHandler = (event) => {
    const filterType = event.target.name;
    const key = event.target.value;
    const isOn = event.target.checked;

    let newfilters = filters;
    newfilters[filterType][key] = !filters[filterType][key];
    setFilters(newfilters);
    setFilteredProducts(() => filterProductsPlease(products));
    setPagination(1);
  };

  // filtering products ##################################################################################

  const filterProductsPlease = (arr) => {
    if (!arr) {
      return products;
    }
    if (arr.length === 0) {
      return products;
    }

    if (!filters.brand || filters.brand.length < 2) {
      return products;
    }

    if (isOnlyShowInStockChecked) {
      arr = arr.filter((product) => product.numInStock > 0);
    }

    let productsThatPassBrandFilter = arr;
    let productsThatPassCategoryFilter = arr;
    let productsThatPassBodyLocationFilter = arr;

    if (!Object.values(filters.category).every((e) => e === false)) {
      productsThatPassCategoryFilter = products.filter((product) => {
        return filters.category[product.category.toLowerCase()] === true;
      });
    }

    if (!Object.values(filters.brand).every((e) => e === false)) {
      productsThatPassBrandFilter = products.filter((product) => {
        const ProductBrand = brands.find(
          (brand) => Number(brand._id) === Number(product.companyId)
        );
        return filters.brand[ProductBrand.name.toLowerCase()] === true;
      });
    }

    if (!Object.values(filters.body_location).every((e) => e === false)) {
      productsThatPassBodyLocationFilter = products.filter((product) => {
        return (
          filters.body_location[product.body_location.toLowerCase()] === true
        );
      });
    }

    // intersection pass products
    let productsThatPassAllFilters = productsThatPassCategoryFilter;

    productsThatPassAllFilters = productsThatPassAllFilters.filter(
      (product) => {
        return !productsThatPassBodyLocationFilter.every(
          (productPassBrand) => product._id !== productPassBrand._id
        );
      }
    );

    productsThatPassAllFilters = productsThatPassAllFilters.filter(
      (product) => {
        return !productsThatPassBrandFilter.every(
          (productPassBD) => product._id !== productPassBD._id
        );
      }
    );

    return productsThatPassAllFilters;
  };
  useEffect(() => {
    setFilteredProducts(() => filterProductsPlease(products));
  }, [filters, isOnlyShowInStockChecked, products]);
  return (
    <FilterContext.Provider
      value={{
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
