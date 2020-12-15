import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box
    }
    body{
        font-family: "Poppins", sans-serif;
        background:#262626;
        overflow: ${(props) => (props.burgerMenu ? "hidden" : "auto")}
    }
`;

export default GlobalStyle;
