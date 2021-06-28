import { LogFailure, LogSuccess } from 'store/Log/LogActions';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState} from 'react';
import { useAlert } from "react-alert";
import Cookies from 'js-cookie';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();
  let token;
  const data = {
    user: {
      email: email,
      password: password
    }
  };

  const handleFetch = (e) => {
    e.preventDefault();

    fetch("https://ronincode.herokuapp.com/users/sign_in", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      token = response.headers.get('Authorization');
      Cookies.set('token', token);
      return response.json();
    })
    .then((data) => {
      if(data.id){
        dispatch(LogSuccess(data, true))
        Cookies.set('id', data.id)
        history.push("/");
        return(alert.success("Connecté 👋"))
      } else {
        dispatch(LogFailure(data.message, false))
        Cookies.remove('token');
        return(alert.error("Désolé, une erreur est survenue."))
      }
    })
  }

  return (
    <div className = "Sign">
      <div className="login-box">
        <h2>Se connecter</h2>
        <form onSubmit={handleFetch}>
          <div className="user-box">
            <label className="label-form-log">Email</label>
            <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="user-box">
            <label className="label-form-log">Mot de passe</label>
            <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <Link className="link-sign" to="/reinitialisation/mot-de-passe">Mot de passe oublié ?</Link><br/>
          <Link className="link-sign" to="/inscription">S'inscrire</Link>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Connexion
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signin;
