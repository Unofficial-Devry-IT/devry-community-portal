import styled, { createGlobalStyle } from "styled-components";

export const AppWrapper = styled.div``;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    :root {
        font-size: 16px;
    }
    html, body {
        width: 100vw;
        height: 100vh;
    }
`;

export const PrimaryContent = styled.div`
    padding: 0.5rem;
`;
