import { createGlobalStyle } from "styled-components";

export const theme = {
  orange: "#DF6625",
  darkGrey: "#323232",
  boldFont: "Archivo Black, sans-serif",
  contentFont: "Noto Sans TC, sans-serif",
};

export default createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
  }
  
  
html, body, div,
input, button, select, option,
h1, h2, h3, h4, h5, h6, p,
text {
    font-family: sans-serif;
    /* font-family: "Noto Sans TC, sans-serif"; */
    line-height: 2;
}


button {
  border-radius: 14px;
}
  
  `;

//border-radius for bigger containers: 14px
