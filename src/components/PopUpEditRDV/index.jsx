import React, { useState} from 'react'
import Cookies from 'js-cookie';
import './style.css'


const PopUpEditRDV = (props) => { 
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [title, setTitle] = useState('')
    const [userTwo, setUserTwo] = useState('')
    const token = Cookies.get('token')

    const inputData = {
      appointment: {
        date: date,
        time: time,
        title: title,
        user_2_id: userTwo,
      }
    }
    const url = `https://ronincode.herokuapp.com/appointments/${props.id}`

    const handleFetch = (e) => {
      e.preventDefault();

      console.log(inputData)
      console.log(props.id)

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
        if(data.status === "error"){
          alert("error")
         } else {
            console.log(data)
            props.rdvFetch();
            props.handleClose();
          }
        })
      } 

    return (
      <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <h1>Modifier l'évènement</h1>
        <form className="form" onSubmit={handleFetch}>
            <input type="text" value={title} placeholder="Ajouter un titre" onChange={(e) => setTitle(e.target.value)}></input>
            <input type="date" value={date} placeholder="Date du rendez-vous" onChange={(e) => setDate(e.target.value)}></input>
            <input type="time" value={time} placeholder="heure du rendez-vous" onChange={(e) => setTime(e.target.value)}></input>
            <input type="text" value={userTwo} placeholder="Ajouter un invité (id)" onChange={(e) => setUserTwo(e.target.value)}></input>
            <button>Valider</button>
        </form>
      </div>
    </div>
    );
}

export default PopUpEditRDV