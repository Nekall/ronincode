import React, { useEffect, useState} from 'react'
import './style.css'
import { useParams } from 'react-router-dom';



const Showappointment = () => { 
    const { appointmentSlug } = useParams();
    const [appointment, setAppointment] = useState([])

    const appointmentFetch = () => {
      const url = `https://ronincode.herokuapp.com/appointments/${appointmentSlug}`
      console.log("hello")

      fetch(url, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
        },
        // body : JSON.stringify(inputData)
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAppointment(data)
      })

    }

      useEffect(() => {
        appointmentFetch();
        // eslint-disable-next-line
    }, [])


    if (appointment !== undefined) {
      return (
        <div className = "Appointment">
          <div className="ContentAppointment" >
              <h1>Date : </h1>
              <h3>{appointment.date}</h3>
              <h2>Titre : </h2>
              <h3>{appointment.title}</h3>
              <h2>Mentor : </h2>
              <h3>{appointment.time}</h3>
              <h2>Heure : </h2>
              <h3>{appointment.user_2_id}</h3>
          </div>
        </div>
  );
} else {
  return (
    <p>
      Annonce introuvable
    </p>
  )
}
}

export default Showappointment