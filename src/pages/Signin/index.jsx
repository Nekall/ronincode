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
        alert(dataFetch.message)
      }
    })
  }

  return (
    <form onSubmit={handleFetch} >
      <h1 className="title-form">Se connecter</h1>
      <input type="email" value={email} required placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" value={password} required placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}></input>
      <button >Connexion</button>
    </form>
  )

}

export default Signin
