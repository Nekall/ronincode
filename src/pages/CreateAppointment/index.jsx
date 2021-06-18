import React, { useState} from 'react'
import Cookies from 'js-cookie';
import './style.css'
import { useHistory } from 'react-router-dom'


const CreateAppointment = () => { 
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [userTwo, setUserTwo] = useState('')
    const token = Cookies.get('token')

    const history = useHistory()

    const inputData = {
      appointment: {
        date: date,
        title: title,
        user_2_id: userTwo,
      }
    }
    const url = "https://ronincode.herokuapp.com/appointments"

    const handleFetch = (e) => {
      e.preventDefault();

      console.log(inputData)

      fetch(url, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          "Authorization": `${token}`
        },
        body : JSON.stringify(inputData)
      })
      .then((response) => response.json())
      .then(data => {
        if(data === undefined){
          alert("error")
         } else {
            console.log(data)
            alert("RDV crée")
            history.push(`/rendezvous/${data.id}`)
          }
        })
      } 

    
    return (
      <div className = "NewArticle">
        <h1>Créer un RDV</h1>
        <form className="form" onSubmit={handleFetch}>
            <input type="text" value={title} placeholder="Ajouter un titre" onChange={(e) => setTitle(e.target.value)}></input>
            <input type="date" value={date} placeholder="Date du rendez-vous" onChange={(e) => setDate(e.target.value)}></input>
            <input type="text" value={userTwo} placeholder="Ajouter un invité (id)" onChange={(e) => setUserTwo(e.target.value)}></input>
            <button>Valider</button>
        </form>
      </div>
  );
}

export default CreateAppointment