import React, { useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogFailure, LogSuccess } from 'store/Log/LogActions';
import Cookies from 'js-cookie'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  let token;
  const data = {
    user: {
      email: email,
      password: password
    }
  }

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
      } else {
        dispatch(LogFailure(data.message, false))
        Cookies.remove('token');
        setError(data.message + 'Vérifiez votre adresse mail et votre mot de passe.')
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
          <div className="error-message">{error}</div>
          </div>
          <Link className="link-sign" to="/reinitialiser/mot-de-passe">Mot de passe oublié ?</Link><br/>
          <Link className="link-sign" to="/se-connecter">Se connecter</Link>
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

export default Signin
