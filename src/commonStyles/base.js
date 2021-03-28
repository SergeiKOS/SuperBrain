import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";
import { font } from "./variables";

import OpenSansWoff2400 from './fonts/open-sans-v18-latin-regular.woff2';
import OpenSansWoff400 from './fonts/open-sans-v18-latin-regular.woff';
import OpenSansWoff2700 from './fonts/open-sans-v18-latin-700.woff';
import OpenSansWoff700 from './fonts/open-sans-v18-latin-700.woff2';

const GlobalStyle = createGlobalStyle`
  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url(${OpenSansWoff2400}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansWoff400}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url(${OpenSansWoff2700}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${OpenSansWoff700}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: ${font.fontWeightMain};
    font-size: ${font.fontMain};
    color: ${colors.black};
  }
  
  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden; 
  }

  a {text-decoration: none; color: inherit;}

  input {font: inherit;}

  button {
    font-family: inherit;
  }

  h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  
  .container {
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;

    @media (min-width: 768px) {
      width: 768px;
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: 1300px) {
      width: 1200px;
    }
  }

  .App {
    display: grid;
    height: 100vh;
    grid-template-rows: 60px 10fr 40px;
  }

  /* main {
    overflow: hidden;
  } */
`;

export default GlobalStyle;
