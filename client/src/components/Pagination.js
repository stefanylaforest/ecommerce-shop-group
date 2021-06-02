import React from "react";
import Styled from "styled-components";
import { theme } from "./GlobalStyles";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export const Pagination = ({ numOfPages, pagination, setPagination }) => {
  const numArr = [];
  for (let i = 1; i <= numOfPages; i++) {
    numArr.push(i);
  }

  const handleSelectPage = (event) => {
    setPagination(Number(event.target.value));
  };

  const handleGoToPreviousPage = (event) => {
    if (pagination !== 1) {
      setPagination((pagination) => pagination - 1);
    }
  };
  const handleGoToNextPage = (event) => {
    if (pagination !== numOfPages) {
      setPagination((pagination) => pagination + 1);
    }
  };

  return (
    <Wrapper>
      <div className="buttons">
        <button
          className="page-button"
          onClick={handleGoToPreviousPage}
          value={1}
        >
          <FiArrowLeft />
        </button>
        {numArr
          .filter((num) => num <= 8)
          .map((num) => {
            return (
              <button
                className={`page-button ${
                  num === pagination ? "current-page" : ""
                }`}
                onClick={handleSelectPage}
                value={num}
              >
                {num}
              </button>
            );
          })}
        {numArr.length > 8 && (
          <button className="page-button" disabled>
            ...
          </button>
        )}
        {numArr.length > 8 && (
          <button
            className="page-button"
            onClick={handleSelectPage}
            value={numArr.length}
          >
            {numArr.length}
          </button>
        )}
        <button
          className="page-button"
          onClick={handleGoToNextPage}
          value={numArr.length}
        >
          <FiArrowRight />
        </button>
      </div>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = Styled.div`
overflow: hidden;
display: flex;
justify-content: center;
border-radius: 10px;

.buttons {

border-radius: 10px;
max-width: 800px;
margin: 0 auto;
display: flex;
gap: 0;
justify-content: stretch;
margin-top: 5rem;
margin-bottom: 3rem;
overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
&:hover {
  box-shadow: rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;
}
}



.page-button {
    flex: 1 1 0;
    padding: 1rem;
    border: none;
    color: white;
    background: #454e51;
    font-size: 1.3em;
    font-weight: 700;
    width: 6rem;



    &:active {
        background: ${theme.accentColor};
        color: white;
    }
    &:hover {

        background:  #C64500;;
        color: white;
    }

    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
}

.current-page {
  background: ${theme.accentColor};
}




`;
