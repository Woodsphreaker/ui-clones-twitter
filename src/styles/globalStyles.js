import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    color: var(--white);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%
  }

  html {
    background: var(--primary)
  }

  body {
    /* font-size: 400 14px;
    font-family: Roboto, sans-serif;
    background-color: #f0f0f0; */
    -webkit-font-smoothing: antialiased !important;
  }

  button, input {
    border: none;
    background: none;
    cursor: pointer;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  a {
    text-decoration: none
  }

  ul {
    list-style: none
  }

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }
`