import { thema } from './Thema';
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{padding: 0;margin: 0;border: 0;box-sizing: border-box;}
    *,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
    :focus,:active{outline: none;}
    a:focus,a:active{outline: none;}
    footer,header{display: block;}
    html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
    input::-ms-clear{display: none;}
    button{cursor: pointer;background-color:unset;border:none;}
    button::-moz-focus-inner{padding:0;border:0;}
    a,a:visited{text-decoration: none;}
    a:hover{text-decoration: none;}
    ul,li{list-style: none;}
    img{vertical-align: top;}

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: ${thema.colors.font};
        border-color: ${thema.colors.primaryBg};
    } 

    h1, h2{
        color: ${thema.colors.titleFont};
    }

`