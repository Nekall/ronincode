import React, { useState, useEffect } from 'react'
import CreateAppointment from 'components/CreateAppointment'
import PopUpEditRDV from 'components/PopUpEditRDV'
import DeleteRdv from 'components/DeleteRdv'
// import Cookies from 'js-cookie';
import './style.scss'
import BtnTechno from 'components/BtnTechno';
import { Link } from 'react-router-dom';


const IndexAppointment = () => { 
    // const token = Cookies.get('token')
    const [rdvs, setRdv] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [eventValue, setEventValue ] = useState("");
 
    
    
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
        if(data === undefined){
          alert("error")
          setRdv(data)

         } else {
            setRdv(data)
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
            <div className = "NewRDV">
            <CreateAppointment rdvFetch={rdvFetch} />
            <div className="rddv">
              <ul>
                <h1>Mes prochains rendez-vous</h1>
              {rdvs.map((rdv => (
                <li key={rdv.id} className="eventCard">
                  <div className="dm-container">
                    <div className="rdv">{rdv.date}</div>
                    <div className="month">septembre</div>
                  </div>
                  <div className="txt-container">
                    <div className="title">{rdv.title} <Link to="/">{rdv.user_2_id}</Link></div>
                    <div className="buttons">
                      <BtnTechno />
                    </div>
                  </div>
                  <div className="editButton">
                    <DeleteRdv id={rdv.id} rdvFetch={rdvFetch} />
                  </div>
                  <div>
                    <button onClick={() => openPopup(rdv)}>Edit</button>
                  </div>
                </li>
              )))}
              </ul>
              { isOpen ? <PopUpEditRDV title={eventValue.title} appointment_time={eventValue.appointment_time} id={eventValue.id} user_2_id={eventValue.user_2_id} close={closePopup} rdvFetch={rdvFetch}/> : null }
            </div>
          </div>
          )
        }


export default IndexAppointment