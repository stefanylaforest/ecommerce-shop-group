import { createGlobalStyle } from "styled-components";

export const theme = {};

export default createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
  }`;
