import React from "react";
import { render } from "react-dom";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import Footer from "components/Footer";
import "style/main.scss";
import "style/navbar.scss";
import "style/hero.scss";
import "style/footer.scss";

const App = () => (
  
  <>
    <Navbar />
    <Hero />
    <Footer />
  </>
);

render(<App />, document.getElementById("root"));
