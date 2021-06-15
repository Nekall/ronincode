import React from "react";
import { render } from "react-dom";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import CardGroupArticle from "components/CardGroupArticle";
import Footer from "components/Footer";
import "style/main.scss";

const App = () => (
  
  <>
    <Navbar />
    <Hero />
    <CardGroupArticle />
    <Footer />
  </>
);

render(<App />, document.getElementById("root"));
