import React, { useState} from 'react'
import Cookies from 'js-cookie';
import './style.css'


const PopUpEditRDV = (props) => { 
    const token = Cookies.get('token')
    console.log(props.title)

    const [inputData, setInputData] = useState({
      appointment: {
        date: props.date,
        appointment_time: props.appointment_time,
        title: props.title,
        user_2_id: props.user_2_id,
      }
    })


    const handleChange = (e) => {
      setInputData({
        ...inputData,
        appointment: {
          [e.target.name]: e.target.value
        }
      });
    };
  

    const url = `http://localhost:3000/appointments/${props.id}`


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
            <input type="text" placeholder={props.title} name="title" onChange={handleChange}></input>
            <input type="date" placeholder={props.date} name="date" onChange={handleChange}></input>
            <input type="time" placeholder={props.appointment_time} name="appointment_time" onChange={handleChange}></input>
            <input type="text" placeholder={props.user_2_id} name="user_2_id" onChange={handleChange}></input>
            <button>Valider</button>
        </form>
      </div>
    </div>
    );
}

export default PopUpEditRDV