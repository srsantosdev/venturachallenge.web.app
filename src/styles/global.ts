import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fcfcfc;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  html, body, #root {
    height: 100vh;
  }

  body, input, button {
    font: 400 1.6rem Roboto;
  }

  button {
    cursor: pointer;
  }
`;
