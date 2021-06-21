import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const PrivateMessaging = () => {
  const user_id = Cookies.get('id');
  let id = parseInt(user_id);
  let receiver = "";

  const { data: dataUser, doFetch: findAllUsers } = useFetch();
  const { data: dataConversation, doFetch: FindAllConversations } = useFetch();

  const allUsers = () => {
    findAllUsers("users");
  };

  const allConversations = () => {
    FindAllConversations("privatemessagings");
  };

  useEffect(() => {
    allUsers();
    allConversations();
  }, [])

  console.log(dataConversation);

  return(
    <div>
      <h1> Conversations </h1>
      <ul>{dataConversation && dataConversation.map((list) => {
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
      </ul>
    </div>
  )
}

export default PrivateMessaging;