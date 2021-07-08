import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    
    box-sizing: border-box;
  }
  body {
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    
    margin: 0;
  }
`;

export default GlobalStyle;
