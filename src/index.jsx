import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { positions, Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import PrivateMessaging from 'pages/PrivateMessaging';
import IndexAppointment from 'pages/IndexAppointment';
import ShowAppointment from 'pages/ShowAppointment';
import PrivateRoute from 'components/PrivateRoute';
import ForgotPassword from 'pages/ForgotPassword';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import CreateArticle from 'pages/CreateArticle';
import ResetPassword from 'pages/ResetPassword';
import LegalMention from 'pages/LegalMention';
import UserProfile from 'pages/UserProfile';
import ShowArticle from 'pages/ShowArticle';
import IndexMentor from 'pages/IndexMentor';
import EditArticle from 'pages/EditArticle';
import EditProfile from 'pages/EditProfile';
import HowItWorks from 'pages/HowItWorks';
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Provider } from 'react-redux';
import { store } from 'store/index';
import Contact from 'pages/Contact';
import Message from 'pages/Message';
import { render } from "react-dom";
import Signup from 'pages/Signup';
import Signin from 'pages/Signin';
import Error from 'pages/Error';
import Blog from 'pages/Blog';
import Team from 'pages/Team';
import Home from 'pages/Home'
import React from "react";
import "style/main.scss";

const App = () => {

  const options = {
    timeout: 5000,
    position: positions.TOP_CENTER
  };

  return(
    <>
      <div className="navbar standby">
        Le back-end est désactivé, la version 2 est en développement.
        Plusieurs fonctionnalités sont inopérantes.
      </div>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Router>
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
                <Route path="/politique-de-confidentialite">
                  <PrivacyPolicy />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/mentions-legales">
                  <LegalMention />
                </Route>
                <Route path="/comment-ca-marche">
                  <HowItWorks />
                </Route>
                <Route path="/erreur">
                  <Error />
                </Route>
                <PrivateRoute />
              </Switch>
            <Footer />
          </Router>
        </AlertProvider>
      </Provider>
    </>
  );
};
render(<App />, document.getElementById("root"));
