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
    console.log("updatIIIIIINNNG");
    const filterType = event.target.name;
    const key = event.target.value;
    const isOn = event.target.checked;
    console.log("filter type", filterType);
    console.log("value", key);
    console.log("isOn", isOn);
    console.log("GGG", filters[filterType]);

    let newfilters = filters;
    newfilters[filterType][key] = !filters[filterType][key];
    console.log('new F is', newfilters);
    setFilters(newfilters);
  };

  // filtering products ##################################################################################

  const filterProductsPlease = (arr) => {
    return arr;
  };

  console.log('filllllters', filters);

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
