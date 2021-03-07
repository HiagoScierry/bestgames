import { createGlobalStyle } from "styled-components";
import { colors } from "../utils";

const background = colors.background;
const text = colors.text;

const GlobalStyle = createGlobalStyle`
  * { padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
  }
  body {
    background: ${background};
    color: ${text};
    font-family: 'Roboto' , sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  
  input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
export default GlobalStyle;
