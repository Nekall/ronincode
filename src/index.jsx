import React from "react";
import { render } from "react-dom";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import CardGroupArticle from "components/CardGroupArticle";
import Footer from "components/Footer";
import "style/main.scss";
import { store } from 'reduxx/store';
import { Provider } from 'react-redux'



const App = () => (
  
  <>
    <Provider store={store}>
      <Navbar />
      <Hero />
      <CardGroupArticle />
      <Footer />
    </Provider>
  </>
);

render(<App />, document.getElementById("root"));
