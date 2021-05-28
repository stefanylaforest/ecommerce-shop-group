import { createGlobalStyle } from "styled-components";

export const theme = {
  accentColor: "#DF6625",
  hoverAccentColor: "#BB4D12",
  fontColor: "#323232",
  headingFont: "Archivo Black, sans-serif",
  contentFont: "Lato, sans-serif",
};

export default createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      
  }

  body {
    margin: 0 auto;
    background: linear-gradient(148deg, rgba(58,68,68, 1) 0%, rgba(153,155,153,1) 100%);
  }
  
  
html, body, div,
input, button, select, option, p,
text {
    font-family: ${theme.contentFont};
    line-height: 2;
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${theme.headingFont};
  text-transform: uppercase;
}

ul {
  list-style: none;
  padding: 0;
}

h2, h3, h4 {
  font-weight: 700;
}


.accentBtn {
  border-radius: 5px;
  background-color: ${theme.accentColor};
  color: white;
  border: none;
  padding: 8px 15px;
  font-family: ${theme.contentFont};
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${theme.hoverAccentColor};
  }
}
  `;
