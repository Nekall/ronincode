import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Admin from 'pages/Admin';

const PrivateRoute = () => {
  const logged = useSelector(state => state.logReducer.logged);
  const is_admin = useSelector(state => state.logReducer.is_admin);
  return (
    <>
    {logged && is_admin?
      <Route path="/admin" exact>
        <Admin />
      </Route>
      :<Redirect to="/" />
    }
    </>
  );
};

export default PrivateRoute;
