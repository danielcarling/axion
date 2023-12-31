import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: 'Archivo', sans-serif;
  }

  p {
    margin: '0';
    padding: '0';
  }
`;
export default GlobalStyle;
