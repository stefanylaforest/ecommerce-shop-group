import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { FilterContext } from "./FilterContext";

const FiltersPanel = () => {
  const {
    filters,
    setFilters,
    filteredProducts,
    setFilteredProducts,
    updateFiltersHandler,
  } = useContext(FilterContext);

  console.log("FILTERS ARE:", filters);

  return (
    <Div>
      Filters are here
      {filters.brands && (
        <ul>
          {Object.entries(filters.brands).map((entry) => {
            return <li>{entry[0] + "_" + entry[1]}</li>;
          })}
        </ul>
      )}
    </Div>
  );
};

export default FiltersPanel;

const Div = styled.div`
  background: lightgreen;
`;
