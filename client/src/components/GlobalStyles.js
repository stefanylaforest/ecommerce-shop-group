import { createGlobalStyle } from "styled-components";

export const theme = {
  accentColor: "#F25400",
  hoverAccentColor: "#C64500",
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
      scroll-behavior: smooth;
  }

  body {
  margin: 0 auto;
    /* background: linear-gradient(148deg, rgba(58,68,68, 1) 0%, rgba(153,155,153,1) 100%); */
    background-image: url('/images/backgroundImg.jpg');
  background-size: cover;
  background-position: center;
  box-shadow:inset 0 0 0 2000px rgb(48,48,48, 0.4);
  overflow-x: hidden;
  background-repeat: no-repeat;
  }
  
  
html, body, div,
input, button, select, option, p,
text, a {
    font-family: ${theme.contentFont};
    line-height: 2;
    font-weight: 500;
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

a {
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
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
  font-weight: 600;
  cursor: pointer;

  

  &:hover {
    background-color: ${theme.hoverAccentColor};
  }

  @media screen and (min-width: 900px) {
    &:active {
    animation: scaleIn 0.3s ease-in-out forwards;
  }
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8)
  }

  to {
    transform: scale(1);
  }
}



  `;
