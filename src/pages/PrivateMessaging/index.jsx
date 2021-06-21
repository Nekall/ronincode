import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FetchWithBearer } from 'services/Fetch';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Cookies from 'js-cookie';

const PrivateMessaging = () => {
  const dispatch = useDispatch()
  const user_id = Cookies.get('id');
  let id = parseInt(user_id);
  const logged = useSelector(state => state.logReducer.logged);
  const Conversations = useSelector(state => state.fetchReducer.alldata);
  const Users = useSelector(state => state.fetchReducer.alluser);
  let receiver = "";

  const AllUsers = () => {
    dispatch(FetchWithBearer("https://ronincode.herokuapp.com/users", "GET", 1));
  };

  const allConversations = () => {
    dispatch(FetchWithBearer("https://ronincode.herokuapp.com/privatemessagings", "GET", 2));
  };

  useEffect(() => {
    AllUsers();
    allConversations();
  }, [])

  console.log(Conversations);

  return(
    <div>
      <h1> Conversations </h1>
      <ul>{Conversations && Conversations.map((list) => {
        if (id === list.sender_id || id === list.recipient_id) {
          if (id === list.sender_id) {
            {Users && Users.map((user) => {
              if (list.recipient_id === user.id) {
                receiver = user.email;
              }}
            )}
          } else if (id === list.recipient_id) {
            {Users && Users.map((user) => {
              if (list.sender_id === user.id) {
                receiver = user.email;
              }}
            )}
          }
          return(
            <li key={list.id}><Link to={`/conversations/${list.id}/messages`}>Conversation avec {receiver}</Link></li>
          )
        } else {
          return false;
        }
      })}
      </ul>
    </div>
  )

}

export default PrivateMessaging;