import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogFailure, LogSuccess } from 'reduxx/Log/LogActions';
import './style.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const inputData = {
    user: {
      email: email,
      password: password
    }
  }

  const handleFetch = (e) => {
    e.preventDefault();

    fetch("https://ronincode.herokuapp.com/users", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(inputData)
    })
    .then(data => {
      if(data.error !== undefined){
        dispatch(LogFailure(data.error, false))
        alert(data.error)
      } else {
        dispatch(LogSuccess(data, true))
        history.push("/");
        alert(data.message)
      }
    })
  }


  return (
    <form onSubmit={handleFetch} >
      <h1 className="title-form">Créer un compte</h1>
      <input type="email" value={email} required placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" value={password} required placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}></input>
      <button >Valider</button>
    </form>
  )
}

export default Signup
