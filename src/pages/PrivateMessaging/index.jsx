import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const PrivateMessaging = () => {
  const user_id = Cookies.get('id');
  let id = parseInt(user_id);
  const [refreching, setRefreching] = useState(false);
  let receiver = "";

  const { data: dataUser, doFetch: findAllUsers } = useFetch();
  const { data: dataConversation, doFetch: FindAllConversations } = useFetch();

  const refrech = () => {
    setRefreching(!refreching);
  };

  useEffect(() => {
    findAllUsers("users");
    FindAllConversations("privatemessagings");
    // eslint-disable-next-line
  }, [test])


  return(
    <div className="discussions-container">
      <h1>Conversations</h1>
      <button onClick={refrech} className="refresh">Rafraichir</button>
      {dataUser ?
        <ul>{dataConversation && dataConversation.map((list) => {
          if (id === list.sender_id || id === list.recipient_id) {
            if (id === list.sender_id) {
              if (list.recipient_id ) {
                receiver = dataUser.find(({ id }) => id === list.recipient_id);
              }
            } else if (id === list.recipient_id) {
              if (list.sender_id ) {
                receiver = dataUser.find(({ id }) => id === list.sender_id);
              }
            }
            return(<li key={uuidv4()}><Link to={`/conversations/${list.id}/messages`}>{receiver.username}</Link></li>);
          } else {
            return false;
          }
        })}</ul>
        :
        ""
      }
    </div>
  )
}

export default PrivateMessaging;

      /*<ul>{dataConversation && dataConversation.map((list) => {
        {dataUser && dataUser.map((user) => {
          if (id === list.sender_id || id === list.recipient_id) {
            if (id === list.sender_id) {
              if (list.recipient_id === user.id) {
                receiver = user.email;
              }
            } else if (id === list.recipient_id) {
              if (list.sender_id === user.id) {
                receiver = user.email;
              }
            }
            return(<li key={list.id}><Link to={`/conversations/${list.id}/messages`}>Conversation avec {receiver}</Link></li>);
          } else {
            return false;
          }
        })}
      })}
      </ul>*/