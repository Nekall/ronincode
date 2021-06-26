import React, { useState} from 'react'
import Cookies from 'js-cookie';

const CreateAppointment = (props) => { 
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [title, setTitle] = useState('')
  const [userTwo, setUserTwo] = useState('')
  const token = Cookies.get('token')
  const [alert, setAlert] = useState('')
  const [userAlert, setUserAlert] = useState('')

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
    console.log(new Date (Date.now()))

    if (new Date(date) < new Date (Date.now())) {
      setAlert(true)
    } else {
      setAlert(false)
      
      if (userTwo === "") {
        setUserAlert(true)
        console.log(userTwo)

      } else {
        setUserAlert(false)
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
        if(data === "undefined"){
          alert("error")
          } else {
            props.rdvFetch();
          }
        })
      }
    }
  }

  return (
    <div className = "new-appointment">
      <h1>Créer un RDV</h1>
      <form onSubmit={handleFetch}>
        <input type="text" value={title} placeholder="Ajouter un titre" onChange={(e) => setTitle(e.target.value)} />
        <input type="date" value={date} placeholder="Date du rendez-vous" onChange={(e) => setDate(e.target.value)} />
        { alert ? <div className="alert">La date ne peut pas être dans le passé</div> : null }
        <input type="time" value={time} placeholder="Heure du rendez-vous" onChange={(e) => setTime(e.target.value)} />
        <input type="text" value={userTwo} placeholder="Ajouter un invité (id)" onChange={(e) => setUserTwo(e.target.value)} />
        { userAlert ? <div className="alert">Merci de renseigner un utilisateur</div> : null }
        <button>Créer</button>
      </form>
    </div>
  );
}

export default CreateAppointment