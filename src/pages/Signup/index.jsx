import { LogFailure, LogSuccess } from 'store/Log/LogActions';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAlert } from "react-alert";
import React, { useState} from 'react';
import '../../style/pages/sign.scss';

const Signup = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();
  const inputData = {
    user: {
      email: email,
      password: password
    }
  };

  const handleFetch = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        return(alert.error("Les mots de passe ne correspondent pas."))
    } else {
      fetch("https://ronincode.herokuapp.com/users", {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(inputData)
      })
      .then(data => {
        if(data.ok){
          dispatch(LogSuccess(data, false))
          history.push("/se-connecter");
          return(alert.success("Votre compte a été créé avec succès"))
        } else {
          dispatch(LogFailure(data.error, false))
          return(alert.error("Désolé, une erreur est survenue."))
        }
      })
    }
  }


  return (
    <div className="Sign">
      <div className="login-box">
        <h2>Créer un compte</h2>
        <form onSubmit={handleFetch}>
          <div className="user-box">
            <label className="label-form-log">Email</label>
            <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="user-box">
            <label className="label-form-log">Mot de passe</label>
            <input id="password_id" type="password" minLength="8" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="user-box">
            <label className="label-form-log">Confirmation du mot de passe</label>
            <input minLength="8" type="password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}></input>
          </div>
          <Link className="link-sign" to="/se-connecter">Se connecter</Link>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Inscription
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
