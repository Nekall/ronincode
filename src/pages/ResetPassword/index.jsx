import { useHistory, useParams } from 'react-router-dom'
import React, { useState} from 'react';
import { useAlert } from "react-alert";
import '../../style/pages/sign.scss';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error] = useState("");
  const { token } = useParams();
  const history = useHistory();
  const alert = useAlert();
  const data = {
    password: password,
    token: token
  };

  const handleFetch = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return(alert.error("Les mots de passe ne correspondent pas."))
    } else {
      fetch("https://ronincode.herokuapp.com/password/reset", {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(data => {
        if(data.ok){
          history.push("/se-connecter");
          return(alert.success("Mot de passe modifié."))
        } else {
          return(alert.error("Désolé, une erreur est survenue."))
        }
      })
    }
  }


  return (
    <div className="Sign">
      <div className="login-box">
        <h2>Nouveau mot de passe :</h2>
        <form onSubmit={handleFetch}>
          <div className="user-box">
            <label className="label-form-log">Mot de passe</label>
            <input id="password_id" minLength="8" type="password" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="user-box">
            <label className="label-form-log">Confirmation du mot de passe</label>
            <input minLength="8" type="password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}></input>
            <div className="error-message">{error}</div>
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Réinitialiser
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword;
