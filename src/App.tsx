import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Guesty from "./containers/Guesty/Guesty";

function App() {
  return (
    <>
      <Header />
      <Main>{<Guesty />}</Main>
      <Footer />
    </>
  );
}

export default App;
