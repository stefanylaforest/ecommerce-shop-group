import React from "react";
import Styled from "styled-components";
import { theme } from "./GlobalStyles";

export const FilterGroup = ({
  filteType,
  title,
  options,
  updateFiltersHandler,
}) => {
  return (
    <Div>
      {options && Object.keys(options).length > 1 && (
        <details className="details">
          <summary className="summary">
            <p className="filter-group-title">{title}</p>
          </summary>
          <ul>
            {Object.keys(options).map((key) => {
              return (
                <div className={` filter-wrapper ${options[key] ? "on" : ""} `}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    defaultChecked={options[key]}
                    value={key}
                    name={filteType}
                    onClick={updateFiltersHandler}
                  />
                  <lable className="label">{key}</lable>
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
  overflow-y: auto;
  max-height: 400px;



border-top: 1px solid lightgray;
/* border-bottom: 1px solid lightgray; */
/* padding-right: 1rem; */
/* padding-left: 1rem; */

.filter-group-title {
  /* font-weight: 700; */
  font-size: 1.2em;
  font-weight: 700;
  color: dimgray;

  &:hover {
    color: ${theme.accentColor};
  }

}

.filter-wrapper {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  & :hover {
    color: ${theme.accentColor};
  }
}
  .on {
    color: ${theme.accentColor};
  }

details summary 
{
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}


  .label {
    font-size: 1.2em;
  }

.summary {
  list-style: none;
  cursor: pointer;
  
}


`;
