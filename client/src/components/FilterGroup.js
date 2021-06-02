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
        <details className='details'>
          <summary className='summary'>
            <p className="filter-group-title">{title}</p>
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

border-top: 1px solid lightgray;
border-bottom: 1px solid lightgray;
/* padding-right: 1rem; */
/* padding-left: 1rem; */

.filter-group-title {
  /* font-weight: 700; */
  font-size: 1.2em;
  color: dimgray;

}

.summary {
  list-style: none;
  cursor: context-menu;
}


`;
