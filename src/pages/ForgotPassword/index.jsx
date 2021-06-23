import React, { useState} from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  let token;
  const data = {
    email: email,
  }

  const handleFetch = (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    fetch("https://ronincode.herokuapp.com/password/forgot", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(data => {
      if(data.ok){
        setSuccess("Un mail vient de vous être envoyé.")
      } else {
        setError("Vérifiez votre adresse mail et réessayer.")
      }
    })
  }

  return (
    <div className = "Sign">
      <div className="login-box">
        <h2>Réinitialiser le mot de passe:</h2>
        <form onSubmit={handleFetch}>
          <div className="user-box">
            <label className="label-form-log">Email</label>
            <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
            <div className="error-message">{error}</div>
            <div className="success-message">{success}</div>
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword;
