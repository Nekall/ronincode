import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ModalCreateConversation from 'components/ModalCreateConversation';

const ModalDate = (props) => {
  let [ifClicked, setIfClicked] = useState(false);

  const clicked = () => {
    setIfClicked(!ifClicked);
  };

  return(
    <div className="contact">
      {props.dataAllUser && props.dataAllUser.map((user) => {
        if (user.id === props.id_user_profile) {
          return(
            <div key={uuidv4()}>
              <div className="username">{user.username} ({user.firstname} {user.lastname})</div>
              {props.logged && (props.id_current !== props.id_user_profile) ? 
                <div>
                  <Link to="/rendez-vous" className="btn-message">Prendre RDV</Link>
                  {ifClicked ? <button onClick={clicked} className="btn-message">X</button> : <button onClick={clicked} className="btn-message">Envoyer un message à {user.email}</button>}
                  {ifClicked ? <ModalCreateConversation id={props.id_user_profile} /> : ""}
                </div>
                :
                <div>
                  <Link to="/conversations" className="btn-message">Mes Conversations</Link>
                  <Link to="/profile-edit" className="btn-message">Edit Profile</Link>
                </div>
              }
            </div>
          );
        }
      })}
    </div>
  );
};

export default ModalDate;