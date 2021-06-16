import React, { useState} from 'react'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const data = {
    user: {
      username: username,
      email: email,
      password: password
    }
  }

  const url = "http://localhost3000/users/sign_up"

  const handleFetch = (e) => {
    e.preventDefault();

    fetch (url)
  } 



  return (
    <form onSubmit={handleFetch} >
      <h2>Inscrivez-vous</h2>
      <input type="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button >Valider</button>
    </form>
  )

}

export default Signup