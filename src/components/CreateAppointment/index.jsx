import React, { useState} from 'react'
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const CreateAppointment = (props) => { 
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [title, setTitle] = useState('')
  const [userTwo, setUserTwo] = useState('')
  const [users, setUsers] = useState('')
  const token = Cookies.get('token')
  const [alert, setAlert] = useState('')
  const [userAlert, setUserAlert] = useState('')

  const inputData = {
    appointment: {
      date: date,
      appointment_time: time,
      title: title,
      user_2_id: userTwo[0]?.id,
    }
  }

    useEffect(() => {
      const url = "https://ronincode.herokuapp.com/users"

      fetch(url, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
        },
      })
      .then((response) => response.json())
      .then(data => {
      if(data === "undefined"){
        alert("error")
        setUsers(data)
        } else {
          setUsers(data)
        }
      })
    },[])
    
    
    const handleDisciple = (e) => {
      const disciple = users.filter((user) => user.email.toLowerCase() === e.target.value.toLowerCase())
      setUserTwo(disciple);
    }


  const handleFetch = (e) => {
    const url = "https://ronincode.herokuapp.com/appointments"
    e.preventDefault();


    if (new Date(date) < new Date (Date.now())) {
      setAlert(true)
    } else {
      setAlert(false)
      
      if (userTwo === "") {
        setUserAlert(true)

      } else {
        setUserAlert(false)


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
        <input type="text" placeholder="Ajouter un invité (email)" onChange={handleDisciple} />
        { userAlert ? <div className="alert">Merci de renseigner un utilisateur</div> : null }
        <button>Créer</button>
      </form>
    </div>
  );
}

export default CreateAppointment