import React from "react";
import { GlobalStyle } from "./Components/Global/Style";
import Header from "./Components/Hearder/Hearder";
import Routes from "./Components/Rotas/Routes";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Routes />
    </>
  );
}