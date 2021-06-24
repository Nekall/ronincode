import React from "react";
import { render } from "react-dom";
// import NavbarOld from "components/NavbarOld";
import Navbar from "components/Navbar";
import Home from 'pages/Home'
import Signup from 'pages/Signup';
import Signin from 'pages/Signin';
import Blog from 'pages/Blog';
import UserProfile from 'pages/UserProfile';
import CreateArticle from 'pages/CreateArticle';
import ShowArticle from 'pages/ShowArticle';
import ShowAppointment from 'pages/ShowAppointment';
import IndexAppointment from 'pages/IndexAppointment';
import IndexMentor from 'pages/IndexMentor';
import EditArticle from 'pages/EditArticle';
import EditProfile from 'pages/EditProfile';
import Rgpd from 'pages/Rgpd';
import Contact from 'pages/Contact';
import LegalMention from 'pages/LegalMention';
import WhoAreWe from 'pages/WhoAreWe';
import ForgotPassword from 'pages/ForgotPassword';
import ResetPassword from 'pages/ResetPassword';
import Team from 'pages/Team';
import Message from 'pages/Message';
import PrivateMessaging from 'pages/PrivateMessaging';
import PrivateRoute from 'components/PrivateRoute';
import Footer from "components/Footer";
import "style/main.scss";
import { store } from 'store/index';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return(
    <>
      <Provider store={store}>
        <Router>
          {/* <NavbarOld /> */}
          <Navbar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/creer-un-rendez-vous" exact>
                <IndexAppointment />
              </Route>
              <Route path="/rendez-vous/:appointmentSlug" exact>
                <ShowAppointment />
              </Route>
              <Route path="/trouver-un-mentor">
                <IndexMentor />
              </Route>
              <Route path="/conversations" exact>
                <PrivateMessaging />
              </Route>
              <Route path="/conversations/:conversationId/messages" exact>
                <Message />
              </Route>
              <Route path="/nouvel-article">
                <CreateArticle />
              </Route>
              <Route path="/blog" exact>
                <Blog />
              </Route>
              <Route path="/blog/:articleSlug" exact>
                <ShowArticle />
              </Route>
              <Route path="/blog/edit/:articleSlug" exact>
                <EditArticle />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
              <Route path="/inscription">
                <Signup />
              </Route>
              <Route path="/se-connecter">
                <Signin />
              </Route>
              <Route path="/profile/:id_user">
                <UserProfile />
              </Route>
              <Route path="/profile-edit">
                <EditProfile />
              </Route>
              <Route path="/nouveau/mot-de-passe/:token">
                <ResetPassword />
              </Route>
              <Route path="/reinitialisation/mot-de-passe">
                <ForgotPassword />
              </Route>
              <Route path="/rgpd">
                <Rgpd />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/mentions-legales">
                <LegalMention />
              </Route>
              <Route path="/qui-sommes-nous">
                <WhoAreWe />
              </Route>
              <PrivateRoute />
            </Switch>
          <Footer />
        </Router>
      </Provider>
    </>
  );
};
render(<App />, document.getElementById("root"));
