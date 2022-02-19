import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  // reset
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  h1,
  input,
  button,
  fieldset {
    border: none;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  // base styles
  body {
    font-family: sans-serif;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #EEE;
    height: 100vh;
  }


  html {
    font-size: 62.5%;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 58.59375%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 54.6875%;
    }
  }
`;

interface ButtonProps {
  width?: string;
  type?: string;
}

export const ButtonDefault = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};

  padding: 1.8rem 0.94rem;
  border-radius: 0.3rem;

  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2.4rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  box-shadow: 0 0.3rem 0 0 ${(props) => props.theme.primaryDark};
  cursor: pointer;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    .icon {
      display: flex;
      align-items: center;
      padding: 1rem 2rem;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      gap: 1rem;

      @media (min-width: 36rem) {
        margin-left: -2rem;
      }
    }
  }

  :hover {
    background-color: ${(props) => props.theme.primaryDark};
  }

  @media (min-width: 48rem) {
    grid-area: button;
  }
`;
