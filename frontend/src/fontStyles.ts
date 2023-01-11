import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: "Roboto-Regular";
    src: local("Roboto-Regular"),
     url("./fonts/Roboto-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Roboto-Bold";
    src: local("Roboto-Bold"),
     url("./fonts/Roboto-Bold.ttf") format("truetype");
}  

@font-face {
    font-family: "Roboto-Light";
    src: local("Roboto-Light"),
     url("./fonts/Roboto-Light.ttf") format("truetype");
} 

@font-face {
    font-family: "Gilroy-Bold";
    src: local("Gilroy-Bold"),
     url("./fonts/Gilroy-Bold.ttf") format("truetype");
}  

@font-face {
    font-family: "Gilroy-Light";
    src: local("Gilroy-Light"),
     url("./fonts/Gilroy-Light.otf") format("truetype");
}  
`;

export default FontStyles;