import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.2;
  font-weight: 400;
  color: ${theme.colors.font};
  background-color: ${theme.colors.primaryBg};

  min-width: 360px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.App {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    border-right-color: unset;
    border: none;
}

section {
  margin-top: 140px;

  @media ${theme.media.mobile} {
    margin-top: 100px;
  }
}
`;
