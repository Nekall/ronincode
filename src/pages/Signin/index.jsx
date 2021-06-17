import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import { LogFailure, LogSuccess } from 'reduxx/Log/LogActions';
// import Cookies from 'js-cookie'
import './style.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()


  const data = {
    user: {
      email: email,
      password: password
    }
  }

  const url = "http://localhost:3000/users/sign_in"

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
        alert("You are logged in")
      }
    })

  } 

  return (
    <form onSubmit={handleFetch} >
      <h1 className="titleForm">Se connecter</h1>
      <input type="email" value={email} required placeholder="Entrez votre email" onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" value={password} required placeholder="Entrez votre mot de passe" onChange={(e) => setPassword(e.target.value)}></input>
      <button >Valider</button>
    </form>
  )

}

export default Signup