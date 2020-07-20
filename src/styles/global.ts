import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background: #fff;
  }
  body, input, button,textarea {
    font: 15px 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    border: none;
  }
`;
