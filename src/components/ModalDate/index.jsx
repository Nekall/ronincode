import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BtnTechno from 'components/BtnTechno';

const ModalDate = (props) => {
  let name = '';

  return(
    <div className="meeting-profile">
      <h2 className="card-title">Prochains rendez-vous</h2>
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
                  <span className="title">{appointment.appointment_time} : {appointment.title} avec <Link className="mentor-name" to={`/profile/${appointment.user_2_id}`}>{name.email}</Link></span>
                  <BtnTechno />
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
                  <span className="title">{appointment.appointment_time} : {appointment.title} avec <Link className="mentor-name" to={`/profile/${appointment.user_1_id}`}>{name.email}</Link></span>
                  <BtnTechno />
                </div>
              </li>
            );
          } else {
            return false;
          }
        })}
        {props.dataAppointment.user_1_id !== props.id_user_profile && props.dataAppointment.user_2_id !== props.id_user_profile ? <div>Aucun rendez-vous de prévu</div> : ""}
      </ul>
    </div>
  );
};

export default ModalDate;