import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    
    box-sizing: border-box;
  }
  body {
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    width: 1904px;
    height: 975px;
    margin: 0;
  }
`;

export default GlobalStyle;
