import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogFailure, LogSuccess } from 'reduxx/Log/LogActions';
import Cookies from 'js-cookie'
import './style.css'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    .then((dataFetch) => {
      if(dataFetch.status === "error"){
        dispatch(LogFailure(dataFetch.message, false))
      } else {
        dispatch(LogSuccess(dataFetch, true))
        Cookies.set('id', dataFetch.id)
        history.push("/");
      }
    })
  }

  return (
    <div>
      <div className="login-box">
        <h2>Se connecter</h2>
        <form onSubmit={handleFetch}>
          <div className="user-box">
            <label className="label-form-log">Username</label>
            <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="user-box">
            <label className="label-form-log">Password</label>
            <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
          </div>
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
