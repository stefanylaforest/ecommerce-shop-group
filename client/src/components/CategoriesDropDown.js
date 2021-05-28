import React, { useState, useContext } from "react";
import { FaToggleOff } from "react-icons/fa";
import { AppContext } from "./AppContext";

const DropDown = ({ title }) => {
  const [open, setOpen] = useState(false);
  const [select, setSelection] = useState([]);
  const { categories } = useContext(AppContext);

  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {
    console.log("clicked");
  };

  return (
    <div className="dd-wrapper">
      <div
        tavIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onDoubleClickCapture={() => toggle(!open)}
      >
        <div className="dd-header_title">
          <p className="dd-header_title--bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
