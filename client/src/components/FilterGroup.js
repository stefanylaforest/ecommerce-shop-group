import React from "react";
import Styled from "styled-components";

export const FilterGroup = ({
  filteType,
  title,
  options,
  updateFiltersHandler,
}) => {

  return (
    <Div>
      {options && Object.keys(options).length > 1 && (
        <details>
          <summary>
            <h2 className="filter-title">{title}</h2>
          </summary>
          <ul>
            {Object.keys(options).map((key) => {
              return (
                <div>
                  <input
                    className=".checkbox"
                    type="checkbox"
                    defaultChecked={options[key]}
                    value={key}
                    name={filteType}
                    onClick={updateFiltersHandler}
                  />
                  <lable>{key}</lable>
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
