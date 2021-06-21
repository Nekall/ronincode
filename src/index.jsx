import React from "react";
import { render } from "react-dom";
import NavbarV1 from "components/NavbarV1";
import Home from 'pages/Home'
import Signup from 'pages/Signup';
import Signin from 'pages/Signin';
import Blog from 'pages/Blog';
import UserProfile from 'pages/UserProfile';
import CreateArticle from 'pages/CreateArticle';
import CreateAppointment from 'pages/CreateAppointment';
import ShowArticle from 'pages/ShowArticle';
import ShowAppointment from 'pages/ShowAppointment';
import EditArticle from 'pages/EditArticle';
import EditProfile from 'pages/EditProfile';
import Message from 'pages/Message';
import Footer from "components/Footer";
import "style/main.scss";
import { store } from 'store/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <NavbarV1 />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/inscription">
              <Signup />
            </Route>
            <Route path="/se-connecter">
              <Signin />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/nouvel-article">
              <CreateArticle />
            </Route>
            <Route path="/creer-un-rendez-vous">
              <CreateAppointment />
            </Route>
            <Route path="/rendezvous/:appointmentSlug">
              <ShowAppointment />
            </Route>
            <Route path="/profile">
              <UserProfile />
            </Route>
            <Route path={`/profile/edit`} exact>
              <EditProfile />
            </Route>
            <Route path="/messages" exact>
              <Message />
            </Route>
            <Route path="/blog/:articleSlug" exact>
              <ShowArticle />
            </Route>
            <Route path="/blog/edit/:articleSlug" exact>
              <EditArticle />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </Provider>
  </>
);

render(<App />, document.getElementById("root"));
