import React, { useState} from 'react'
import Cookies from 'js-cookie';


const AcceptButton = (props) => {
  const token = Cookies.get('token');
  const [confirmed, setConfirmed] = useState('')


  const inputData = {
    appointment: {
      confirmed: confirmed,
    }
  }

  
  const fetchConfirm = () => {
    setConfirmed(true)
    console.log(props.id)
    console.log(confirmed)

  if (window.confirm("êtes vous sûr.sure d'accepter le RDV ?")) {
    
    const url = `http://localhost:3000/appointments/${props.id}`

    fetch(url, {
      method : "PUT",
      headers : {
        "Content-Type" : "application/json",
        "Authorization": `${token}`
      },
      body : JSON.stringify(inputData)
    })
    .then((response) => response.json())
    .then(data => {
      if(data === "undefined"){
        alert("error")
        console.log(data)

       } else {
          console.log(data)
          props.rdvFetch();
        }
      })  
  }

}


  return (
    <div>
      <button onClick={fetchConfirm}>Accepter l'invitation</button>  
    </div>
  );
};



export default AcceptButton;