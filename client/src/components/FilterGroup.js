import React from "react";

export const FilterGroup = ({ title, type, options, handleFilterCahnge }) => {
  return (
    <details>
      <summary>{title}</summary>
      {options.map((option, index) => (
        <div key={"option-" + index} className="checkbox">
          <input
            type="checkbox"
            value={option}
            name={type}
            onChange={handleFilterCahnge}
          />
          <label key={"label-" + index}>{option}</label>
        </div>
      ))}
    </details>
  );
};

export default FilterGroup;
