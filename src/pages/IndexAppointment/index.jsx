import React, { useState, useEffect } from 'react'
import CreateAppointment from 'components/CreateAppointment'
import PopUpEditRDV from 'components/PopUpEditRDV'
import DeleteRdv from 'components/DeleteRdv'
// import Cookies from 'js-cookie';
import './style.css'
import BtnTechno from 'components/BtnTechno';
import { Link } from 'react-router-dom';


const IndexAppointment = () => { 
    // const token = Cookies.get('token')
    const [rdv, setRdv] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    
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
          console.log(data)
          alert("error")
          setRdv(data)

         } else {
            console.log(data)
            setRdv(data)
        }
      })   
    }

      useEffect(() => {
        rdvFetch();
      }, []
      )



      return (
        <div className = "NewRDV">
          <CreateAppointment rdvFetch={rdvFetch} />
          <div className="rdv">
            <ul>
              <h1>Mes prochains rendez-vous</h1>
            {rdv.map((rdv => (
              <li key={rdv.id}>
                <div className="dm-container">
                  <div className="day">{rdv.date}</div>
                  <div className="month">septembre</div>
                </div>
                <div className="txt-container">
                  <div className="title">{rdv.title} <Link to="/">{rdv.user_2_id}</Link></div>
                  <div className="buttons">
                    <BtnTechno />
                  </div>
                </div>
                <div className="editButton">
                  <button onClick={togglePopup}>Edit</button>
                  <DeleteRdv id={rdv.id} rdvFetch={rdvFetch} />
                </div>
                  {isOpen && <PopUpEditRDV title={rdv.title} appointment_time={rdv.appointment_time} id={rdv.id} user_2_id={rdv.user_2_id} rdvFetch={rdvFetch}
                    handleClose={togglePopup}
                  />}
              </li>
            )))}
            </ul>
          </div>
        </div>
    );
}

export default IndexAppointment