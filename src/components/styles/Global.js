import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Fraunces', sans-serif;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
