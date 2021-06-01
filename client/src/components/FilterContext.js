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
    console.log("Before", initialFilters.brand);
    if (query.get("brand")) {
      initialFilters.brand[query.get("brand").toLowerCase()] = true;
    }
    console.log("After", initialFilters.brand);
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

  //resetting states on url change
  useEffect(() => {
    setFilters(() => createInitialFilter());
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
    const value = event.target.value;
    if (event.target.checked) {
      setFilters({
        ...filters,
        [filterType]: {
          ...filters,
          [filterType]: { ...filters[filterType], [value]: true },
        },
      });
    } else {
      setFilters({
        ...filters,
        [filterType]: {
          ...filters,
          [filterType]: { ...filters[filterType], [value]: false },
        },
      });
    }
  };

  // filtering products ##################################################################################

  const filterProductsPlease = (arr) => {
    return arr;
  };

  console.log("FILTERS IN FilterCONTEXT:", filters);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        filteredProducts,
        setFilteredProducts,
        updateFiltersHandler,
        filterProductsPlease,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
