import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BtnTechno from 'components/BtnTechno';

const ModalDate = (props) => {
  let name = '';

  return(
    <div className="next-meeting">
      <h2 className="card-title">Prochain rendez-vous</h2>
      <ul>
        {props.dataAppointment && props.dataAppointment.map((appointment) => {
          if (appointment.user_1_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_2_id)
            return(
              <li key={uuidv4()} className="date-container">
                <div className="date">
                  <div className="day">{appointment.date}</div>
                  <div className="month">septembre</div>
                </div>
                <div className="txt-container">
                  <span className="title">{appointment.appointment_time} : {appointment.title} avec <Link to={`/profile/${appointment.user_2_id}`}>{name.email}</Link></span>
                  <div><BtnTechno /></div>
                </div>
              </li>
            );
          } else if (appointment.user_2_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_1_id)
            return(
              <li key={uuidv4()} className="date-container">
                <div className="date">
                  <div className="day">{appointment.date}</div>
                  <div className="month">septembre</div>
                </div>
                <div className="txt-container">
                  <span className="title">{appointment.appointment_time} : {appointment.title} avec <Link to={`/profile/${appointment.user_1_id}`}>{name.email}</Link></span>
                  <div><BtnTechno /></div>
                </div>
              </li>
            );
          } else {
            return(<div>Aucun rendez-vous de prévu</div>);
          }
        })}
      </ul>
    </div>
  );
};

export default ModalDate;