import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  body {
    /* font-size: ${props => props.theme.font.size};
    list-style-type: none;
    background-color: var(--bg-color) !important;
    color: var(--whitePrimary) !important;
    font-family: 'Source Sans Pro', sans-serif !important; */
  }
  :root {
    --branco: ${(props) => props.theme.colors.white};
    --roxo: ${(props) => props.theme.colors.purple};
    --preto: ${(props) => props.theme.colors.black};
    --vermelho: ${(props) => props.theme.colors.red};
  }
`;
export default GlobalStyle;