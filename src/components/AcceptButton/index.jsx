import React, { useState} from 'react'
import Cookies from 'js-cookie';
import { useEffect } from 'react';


const AcceptButton = (props) => {
  const token = Cookies.get('token');
  const [validate, setValidate] = useState('')


  const inputData = {
    appointment: {
      validated: validate,
    }
  }

useEffect(()=>{
  setValidate(true)
},[])
  
  const fetchConfirm = () => {

  if (window.confirm("êtes vous sûr.sure d'accepter le RDV ?")) {
    
    const url = `https://ronincode.herokuapp.com/appointments/${props.id}`

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