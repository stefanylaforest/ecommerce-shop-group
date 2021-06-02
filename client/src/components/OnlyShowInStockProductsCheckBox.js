import React from "react";
import Styled from "styled-components";

const OnlyShowInStockProductsCheckBox = ({
  onChangeHandler,
  isOnlyShowInStockChecked,
}) => {
  return (
    <Div>
      <input
        type="checkbox"
        checked={isOnlyShowInStockChecked}
        onChange={onChangeHandler}
      />
      <label className="label">Products In Stock</label>
    </Div>
  );
};

export default OnlyShowInStockProductsCheckBox;

const Div = Styled.div`

display: flex;
gap: 0.5rem;
align-items: center;

.label {
    font-size:1.2em;
    font-weight: 700;
    color: dimgray;
}


`;
