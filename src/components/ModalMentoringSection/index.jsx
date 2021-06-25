import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ModalMentoringSection = (props) => {
  let name = '';

  return(
    <div className="mentoring-section">
      <ul>
        <div className="title">Mentors</div>
        {props.dataAppointment && props.dataAppointment.map((appointment) => {
          if (appointment.user_2_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_1_id)
            return(
              <div key={uuidv4()}>
                <li><Link to={`/profile/${appointment.user_1_id}`}>{name.email}</Link></li>
              </div>
            );
          }
        })}
      </ul>
      <ul>
        <div className="title">Disciples</div>
        {props.dataAppointment && props.dataAppointment.map((appointment) => {
          if (appointment.user_1_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_2_id)
            return(
              <li key={uuidv4()}><Link to={`/profile/${appointment.user_2_id}`}>{name.email}</Link></li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ModalMentoringSection;