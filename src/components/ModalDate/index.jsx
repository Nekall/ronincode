import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BtnLangage from 'components/BtnLangage';

const ModalDate = (props) => {
  let name = '';

  return(
    <div className="date">
      <ul>
        Prochain rendez-vous
        {props.dataAppointment && props.dataAppointment.map((appointment) => {
          if (appointment.user_1_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_2_id)
            return(
              <li key={uuidv4()}>
                <div className="dm-container">
                  <div className="day">{appointment.date}</div>
                  <div className="month">septembre</div>
                </div>
                <div className="txt-container">
                  <span className="title">{appointment.appointment_time} : {appointment.title} avec <Link to={`/profile/${appointment.user_2_id}`}>{name.email}</Link></span>
                  <div>Sur: <BtnLangage /></div>
                </div>
              </li>
            );
          } else if (appointment.user_2_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_1_id)
            return(
              <li key={uuidv4()}>
                <div className="dm-container">
                  <div className="day">{appointment.date}</div>
                  <div className="month">septembre</div>
                </div>
                <div className="txt-container">
                  <span className="title">{appointment.appointment_time} : {appointment.title} avec <Link to={`/profile/${appointment.user_1_id}`}>{name.email}</Link></span>
                  <div>Sur: <BtnLangage /></div>
                </div>
              </li>
            );
          } else {
            return(<div>pas encore de rendez-vous</div>);
          }
        })}
      </ul>
    </div>
  );
};

export default ModalDate;