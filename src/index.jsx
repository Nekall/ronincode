import React from "react";
import { render } from "react-dom";
import Navbar from "components/Navbar";
import Home from 'pages/Home';
import Signup from 'pages/Signup';
import Signin from 'pages/Signin';
import Articles from 'pages/Articles';
import UserProfile from 'pages/UserProfile';
import EditProfile from 'pages/EditProfile';
import Message from 'pages/Message';
import Footer from "components/Footer";
import "style/main.scss";
import { store } from 'reduxx/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const App = () => {



  const id = Cookies.get('id')
  return(
  <>
    <Provider store={store}>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/signin" exact>
              <Signin />
            </Route>
            <Route path="/articles" exact>
              <Articles />
            </Route>
            <Route path={`/users/${id}`} exact>
              <UserProfile />
            </Route>
            <Route path="/message" exact>
              <Message />
            </Route>
            <Route path={`/users/${id}/edit`}exact>
              <EditProfile />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </Provider>
  </>
  )
};

render(<App />, document.getElementById("root"));
