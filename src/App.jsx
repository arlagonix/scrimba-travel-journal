import { ThemeProvider } from "styled-components";
import { StyledMain, StyledHorizontalRuler } from "./App.styled";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme";

import Navigation from "./components/Navigation";
import Card from "./components/Card";

import data from "./data.js";
const cards = data.map((item, itemIndex, array) => {
  if (itemIndex !== array.length - 1) {
    return (
      <>
        <Card {...item} />
        <StyledHorizontalRuler />
      </>
    );
  }
  return <Card {...item} />;
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <StyledMain>{cards}</StyledMain>
    </ThemeProvider>
  );
}
