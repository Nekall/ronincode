import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BtnTechno from 'components/BtnTechno';
import dayjs from 'dayjs';
require('dayjs/locale/fr');

const ModalDate = (props) => {
  let name = null;
  dayjs.locale('fr');

  return(
    <div className={props.nameOfClass}>
      <h2 className="card-title">Prochains rendez-vous</h2>
      <ul>
        {props.dataAppointment && props.dataAppointment.map((appointment) => {
          if (appointment.user_1_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_2_id)
            return(
              <li key={uuidv4()} className="date-container">
                <div className="date">
                  <div className="day">{ dayjs(appointment.date).format('DD') }</div>
                  <div className="mounth">{ dayjs(appointment.date).format('MMMM') }</div>
                </div>
                <div className="txt-container">
                  <span className="title">{appointment.appointment_time} : {appointment.title} avec <Link className="mentor-name" to={`/profile/${appointment.user_2_id}`}>{name.username}</Link></span>
                  <BtnTechno />
                </div>
              </li>
            );
          } else if (appointment.user_2_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_1_id)
            return(
              <li key={uuidv4()} className="date-container">
                <div className="date">
                  <div className="day">{ dayjs(appointment.date).format('DD') }</div>
                  <div className="mounth">{ dayjs(appointment.date).format('MMMM') }</div>
                </div>
                <div className="txt-container">
                  <span className="title">{appointment.appointment_time} : {appointment.title} avec <Link className="mentor-name" to={`/profile/${appointment.user_1_id}`}>{name.username}</Link></span>
                  <BtnTechno />
                </div>
              </li>
            );
          } else {
            return false;
          }
        })}
        {(props.dataAppointment.user_1_id !== props.id_user_profile && props.dataAppointment.user_2_id !== props.id_user_profile) && name === null ?
        <div>Aucun rendez-vous de prévu</div> : ""}
      </ul>
    </div>
  );
};

export default ModalDate;