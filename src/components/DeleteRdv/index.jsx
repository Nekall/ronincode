import React from 'react';
import Cookies from 'js-cookie';


const DeleteRdv = (props) => {
  const token = Cookies.get('token');


  const fetchDelete = () => {

  if (window.confirm("êtes vous sûr.sure de vouloir supprimer le RDV ?")) {
    
    const url = `https://ronincode.herokuapp.com/appointments/${props.id}`

    fetch(url, {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json",
        "Authorization": `${token}`
      },
    })
    .then(data => {
      props.rdvFetch();
    })   
  }

}


  return (
    <div>
      <button onClick={fetchDelete}>Supprimer</button>
      
    </div>
  );
};



export default DeleteRdv;