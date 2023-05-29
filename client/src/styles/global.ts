import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    margin: 0 0 0 0 !important;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #DEA1CE;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background: transparent;
  }
`;
