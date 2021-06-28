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
    <>
      {props.dataAllUser && props.dataAllUser.map((user) => {
        if (user.id === props.id_user_profile) {
          return(
            <div key={uuidv4()} className="contact">
              <div className="username">{user.username} ({user.firstname} {user.lastname})</div>
              {props.logged ?
                <div>
                  {(props.id_current === props.id_user_profile) ? 
                    <div className="buttons">
                      <Link to="/profile-edit" className="btn-edit">Éditer le profil</Link>
                    </div>
                    :
                    <div className="buttons">
                      <Link to="/creer-un-rendez-vous" className="btn-message">Prendre rendez-vous</Link>
                      {ifClicked ? <button onClick={clicked} className="btn-message">X</button> : <button onClick={clicked} className="btn-message">Envoyer un message à {user.email}</button>}
                      {ifClicked ? <ModalCreateConversation id={props.id_user_profile} /> : ""}
                    </div>
                  }
                </div>
                :
                ""
              }
            </div>
          );
        }
      })}
    </>
  );
};

export default ModalDate;