import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import { LogFailure, LogSuccess } from 'reduxx/Log/LogActions';
import Cookies from 'js-cookie'

import './style.css'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  let token;

  const inputData = {
    user: {
      username: username,
      email: email,
      password: password
    }
  }

  const url = "https://ronincode.herokuapp.com/users"

  const handleFetch = (e) => {
    e.preventDefault();

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(inputData)
    })
    .then((response) => {
      console.log(response)
      token = response.headers.get('Authorization');
      Cookies.set('token', token);
      console.log(Cookies.get('token'));
      return response.json();
    })
    .then(data => {
      if(data.error !== undefined){
        dispatch(LogFailure(data.error, false))
        alert(data.error)

      } else {
        dispatch(LogSuccess(data, true))
        console.log(data)
        Cookies.set('id', data.id)
        history.push("/");
        alert(data.message)
      }
    })
  }
 

  return (
    <form onSubmit={handleFetch} >
      <h1 className="titleForm">Créer son compte</h1>
      <input type="username" value={username} required placeholder="Entrez votre pseudo" onChange={(e) => setUsername(e.target.value)}></input>
      <input type="email" value={email} required placeholder="Entrez votre email" onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" value={password} required placeholder="Entrez votre mot de passe" onChange={(e) => setPassword(e.target.value)}></input>
      <button >Valider</button>
    </form>
  )

}

export default Signup