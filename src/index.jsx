import React from "react";
import { render } from "react-dom";
import Navbar from "components/Navbar";
import Home from 'pages/Home';
import Signup from 'pages/Signup';
import Articles from 'pages/Articles';
import Footer from "components/Footer";
import "style/main.scss";
import { store } from 'reduxx/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




const App = () => (
  
  <>
    <Provider store={store}>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/articles" exact>
              <Articles />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  </>
);

render(<App />, document.getElementById("root"));
