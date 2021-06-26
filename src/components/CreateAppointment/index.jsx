import React, { useState} from 'react'
import Cookies from 'js-cookie';

const CreateAppointment = (props) => { 
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [title, setTitle] = useState('')
  const [userTwo, setUserTwo] = useState('')
  const token = Cookies.get('token')

  const inputData = {
    appointment: {
      date: date,
      appointment_time: time,
      title: title,
      user_2_id: userTwo,
    }
  }
  const url = "https://ronincode.herokuapp.com/appointments"

  const handleFetch = (e) => {
    e.preventDefault();

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
    if(data === "undefined"){
      alert("error")
      console.log(data)
      } else {
        console.log(data)
        props.rdvFetch();
      }
    })
  }

  return (
    <div className = "new-appointment">
      <h1>Créer un RDV</h1>
      <form onSubmit={handleFetch}>
        <input type="text" value={title} placeholder="Ajouter un titre" onChange={(e) => setTitle(e.target.value)} />
        <input type="date" value={date} placeholder="Date du rendez-vous" onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} placeholder="Heure du rendez-vous" onChange={(e) => setTime(e.target.value)} />
        <input type="text" value={userTwo} placeholder="Ajouter un invité (id)" onChange={(e) => setUserTwo(e.target.value)} />
        <button>Créer</button>
      </form>
    </div>
  );
}

export default CreateAppointment