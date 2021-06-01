import React from "react";
import Styled from "styled-components";

export const FilterGroup = ({ title, options, updateFiltersHandler }) => {
  return (
    <Div>
      {options && (
        <details>
          <summary>
            <h2 className="filter-title">{title}</h2>
          </summary>
          <ul>
            {Object.entries(options).map((entry) => {
              return (
                <div>
                  <input
                    className=".checkbox"
                    type="checkbox"
                    checked={entry[1]}
                    onChange={updateFiltersHandler}
                  />
                  <lable>{entry[0]}</lable>
                </div>
              );
            })}
          </ul>
        </details>
      )}
    </Div>
  );
};

export default FilterGroup;

const Div = Styled.div`

padding-right: 1rem;
padding-left: 1rem;
background: lightblue;

`;
