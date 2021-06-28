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
            let present = false;
            if (appointment.user_1_id !== name.id) {
              present = true;
            };
            if (present === false) {
              return(
                <div key={uuidv4()}>
                  <li><Link to={`/profile/${appointment.user_1_id}`}>{name.username}</Link></li>
                </div>
              );
            };
          };
        })}
      </ul>
      <ul>
        <div className="title">Disciples</div>
        {props.dataAppointment && props.dataAppointment.map((appointment) => {
          if (appointment.user_1_id === props.id_user_profile) {
            name = props.dataAllUser.find(({ id }) => id === appointment.user_2_id)
            let present = false;
            if (appointment.user_2_id !== name.id) {
              present = true;
            };
            if (present === false) {
              return(
                <div key={uuidv4()}>
                  <li><Link to={`/profile/${appointment.user_2_id}`}>{name.username}</Link></li>
                </div>
              );
            };
          };
        })}
      </ul>
    </div>
  );
};

export default ModalMentoringSection;