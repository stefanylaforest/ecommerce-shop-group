import React from "react";

export const FilterGroup = ({
  title,
  type,
  optionsNames,
  optionsValues,
  handleFilterChange,
  selectedOptions,
}) => {

  const handler = (event) => {
    // event.preventDefault();
    console.log('HANDLEEEEEEEEEEEEd');
    // event.target.checked = !event.target.checked;
  }

  return (
    <details>
      <summary>{title}</summary>
      {optionsNames.map((option, index) => {
        return (
          <div key={"option-" + index} className="checkbox">
            <input
              type="checkbox"
              value={optionsValues[index]}
              name={type}
              onChange={handleFilterChange}
              // checked={selectedOptions.includes(option)}
            />
            <label key={"label-" + index}>{option}</label>
          </div>
        );
      })}
    </details>
  );
};

export default FilterGroup;
