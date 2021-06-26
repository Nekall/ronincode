import React, { useState, useEffect } from 'react'
import CreateAppointment from 'components/CreateAppointment'
import PopUpEditRDV from 'components/PopUpEditRDV'
import DeleteRdv from 'components/DeleteRdv'
import AcceptButton from 'components/AcceptButton'
import Cookies from 'js-cookie'
// import Cookies from 'js-cookie';
import './style.scss'
import BtnTechno from 'components/BtnTechno';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const IndexAppointment = () => { 
  // const token = Cookies.get('token')
  const [rdvs, setRdv] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [eventValue, setEventValue ] = useState("");
  const id = Cookies.get('id')
  console.log(id)
  dayjs.locale('fr')

  const url = "https://ronincode.herokuapp.com/appointments"
  const rdvFetch = () => {

    fetch(url, {
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        // "Authorization": `${token}`
      },
    })
    .then((response) => response.json())
    .then(data => {
      if(data === "undefined"){
        alert("error")
        setRdv(data)
        } else {
          setRdv(data)
          console.log(data)
      }
    })   
  }

  useEffect(() => {
    rdvFetch();
  }, []
  )

  const closePopup = () => {
    setIsOpen(false)
  }

  const openPopup = (rdv) => {
    setEventValue(rdv)
    setIsOpen(true)
    console.log(isOpen)
  }
  return (
    <div className = "appointment-container">
      <CreateAppointment rdvFetch={rdvFetch} />
      <div className="next-appointment">
        <ul>
          <h1>Mes prochains rendez-vous</h1>
          {rdvs && rdvs.map((rdv) => {
            if(parseInt(id) === rdv.user_1_id){
              return (
                <li key={rdv.id}>
                  <div className="date">
                    <div className="day">{ dayjs(rdv.date).format('DD') }</div>
                    <div className="mounth">{ dayjs(rdv.date).format('MMMM') }</div>
                  </div>
                  <div className="txt-container">
                    { rdv.appointment_time } : {rdv.title} avec {rdv.user_2.email}
                  </div>
                  <BtnTechno />
                  <div className="edit">
                    <button onClick={() => openPopup(rdv)}>Éditer</button>
                    <DeleteRdv id={rdv.id} rdvFetch={rdvFetch} />
                    {/* <AcceptButton id={rdv.id} rdvFetch={rdvFetch} /> */}
                  </div>
                </li>)
            } else {
              return (
                <li key={rdv.id}>
                <div className="dm-container">
                  <div className="rdv">{rdv.date}</div>
                  <div className="rdv">{rdv.user_1.email}</div>
                  <div className="month">Rôle : Disciple </div>
                </div>
                <div className="txt-container">
                  <div className="title">{rdv.title} <Link to="/">{rdv.user_2_id}</Link></div>
                </div>
                  <div className="buttons">
                    <BtnTechno />
                  </div>
                <div className="editButton">
                  <button onClick={() => openPopup(rdv)}>Edit</button>
                  <DeleteRdv id={rdv.id} rdvFetch={rdvFetch} />
                  <AcceptButton id={rdv.id} rdvFetch={rdvFetch} />
                </div>
              </li>
              )
            }
          })}
        </ul>
        { isOpen ? <PopUpEditRDV title={eventValue.title} appointment_time={eventValue.appointment_time} id={eventValue.id} user_2_id={eventValue.user_2_id} close={closePopup} rdvFetch={rdvFetch}/> : null }
      </div>
    </div>
  )
}


export default IndexAppointment