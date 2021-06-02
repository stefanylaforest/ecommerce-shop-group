import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { FilterContext } from "./FilterContext";
import FilterGroup from "./FilterGroup";

const FiltersPanel = () => {
  const {
    filters,
    setFilters,
    filteredProducts,
    setFilteredProducts,
    updateFiltersHandler,
  } = useContext(FilterContext);

  // console.log("FILTERS ARE:", filters);

  return (
    <Div>
      Filters are here
      <FilterGroup
        filteType="category"
        title="Categories"
        options={filters.category}
        updateFiltersHandler={updateFiltersHandler}
        />
      <FilterGroup
        filteType="brand"
        title="Brands"
        options={filters.brand}
        updateFiltersHandler={updateFiltersHandler}
        />
      <FilterGroup
        filteType="body_location"
        title="Body Location"
        options={filters.body_location}
        updateFiltersHandler={updateFiltersHandler}
      />
    </Div>
  );
};

export default FiltersPanel;

const Div = styled.div`
  background: lightgreen;

  .checkbox {
  }

  .filter-title {
    font-size: 0.6em;
    display: inline;
  }
`;
