import { useHistory } from 'react-router-dom'
import React, { useState} from 'react';
import { useAlert } from "react-alert";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const alert = useAlert();
  const data = {
    email: email,
  };

  const handleFetch = (e) => {
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
        history.push("/");
        return(alert.success("Un mail vient de vous être envoyé."))
      } else {
        return(alert.error("Vérifiez votre adresse mail et réessayer."))

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
