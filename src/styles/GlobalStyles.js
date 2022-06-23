import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `

    body {
        padding: 25px;
        background-color: #fff;
        font-family: 'Mulish', sans-serif;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyles;