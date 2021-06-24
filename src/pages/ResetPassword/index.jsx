import React, { useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import '../../style/pages/sign.scss'

const ResetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { token } = useParams();
  const data = {
    password: password,
    token: token
  }
  let validate = "8 caractère minimum ✖"
  let isValid = false;

if(password.length > 7){
  validate = "";
  isValid = true;
}

  const handleFetch = (e) => {
    e.preventDefault();
    if (password !== confirmPassword && isValid !== false) {
        setError('Les mots de passe ne correspondent pas.')
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
          console.log("SUCCES");
          console.log(data);
        } else {
          console.log("ERROR");
          console.log(data);
          setError('Désolé, une erreur est survenue.')
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
            <input id="password_id" type="password" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
            <div className="validate-message">{validate}</div>
          </div>
          <div className="user-box">
            <label className="label-form-log">Confirmation du mot de passe</label>
            <input type="password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)}></input>
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
