import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        outline: none;
        border: none;
        transition: all .3s linear;
    }
    html {
        font-size: 62.5%;
        scroll-padding-top: 8rem;
    }
    body {
        font-size: 1.8rem;
        background-color: #F1F1F1;
        color: #333;
        font-family: 'Nunito', sans-serif;
    }
`;