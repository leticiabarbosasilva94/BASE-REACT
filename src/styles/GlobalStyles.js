import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  /* Toastify */
  body .Toastify .Toastify__toast-container .Toastify__toast-container {}
  body .Toastify .Toastify__toast-container .Toastify__toast {}
  body .Toastify .Toastify__toast-container .Toastify__toast--error {}
  body .Toastify .Toastify__toast-container .Toastify__toast--warning {}
  body .Toastify .Toastify__toast-container .Toastify__toast--success {}
  body .Toastify .Toastify__toast-container .Toastify__toast-body {}
  body .Toastify .Toastify__toast-container .Toastify__progress-bar {}
`;
