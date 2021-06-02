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

  return (
    <Div>
      <p className="filter-panel-title">Filters</p>
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
  @media screen and (max-width: 1080px) {
    & {
      display: none;
    }
  }

  justify-self: flex-start;
  flex: 0;
  min-width: 200px;
  max-width: 200px;

  .filter-panel-title {
    font-size: 1.5em;
    font-weight: 700;
    color: dimgray;
  }

  .checkbox {
  }

  .filter-title {
    font-size: 0.6em;
    display: inline;
  }
`;
