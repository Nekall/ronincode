import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogFailure, LogSuccess } from 'store/Log/LogActions';
import '../../style/pages/sign.scss'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const inputData = {
    user: {
      email: email,
      password: password
    }
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
      fetch("https://ronincode.herokuapp.com/users", {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(inputData)
      })
      .then(data => {
        if(data.ok){
          dispatch(LogSuccess(data, true))
          history.push("/");
        } else {
          dispatch(LogFailure(data.error, false))
          setError('Désolé, une erreur est survenue.')
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
            Inscription
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
