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




  const data = {
    user: {
      username: username,
      email: email,
      password: password
    }
  }

  const url = "http://localhost:3000/users"

  const handleFetch = (e) => {
    e.preventDefault();

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((dataFetch) => {
      if(dataFetch.status === "error"){
        dispatch(LogFailure(dataFetch.message, false))
      } else {
        dispatch(LogSuccess(dataFetch, true))
        console.log(dataFetch)
        history.push("/");
      }
    })

  } 

  return (
    <form onSubmit={handleFetch} >
      <h1>Bienvenue chez Ronin Code</h1>
      <input type="username" value={username}  placeholder="Entrez votre pseudo" onChange={(e) => setUsername(e.target.value)}></input>
      <input type="email" value={email} placeholder="Entrez votre email" onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" value={password} placeholder="Entrez votre mot de passe" onChange={(e) => setPassword(e.target.value)}></input>
      <button >Valider</button>
    </form>
  )

}

export default Signup