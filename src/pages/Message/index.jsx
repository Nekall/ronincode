import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Skeleton from 'react-loading-skeleton';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const Message = () => {
  const senderId = Cookies.get('id');
  let idSender = parseInt(senderId);
  const { conversationId } = useParams();
  const [content, setContent] = useState('');
  let senderInfo = '';
  
  const sendDataMessage = {
    body: content,
    user_id: idSender,
  };
  
  const { data: dataMessage, doFetch: findMessage } = useFetch();
  const { data: dataUser, doFetch: findAllUsers } = useFetch();
  const { data: endFetch, doFetch: createFetchMessage } = useFetch("POST", sendDataMessage);

  const allMessages = () => {
    findMessage(`privatemessagings/${conversationId}/messages`);
  };

  const allUsers = () => {
    findAllUsers("users");
  };
  
  const createMessage = (e) => {
    e.preventDefault();
    createFetchMessage(`privatemessagings/${conversationId}/messages`);
  };
  
  useEffect(() => {
    allUsers();
    allMessages();
    // eslint-disable-next-line
  }, [endFetch]);
  
  return(
    <div className="messages-container">
      <Link to="/conversations" className="btn-return">Retour</Link>
      <h1>Messages</h1>
      {dataUser ?
          <div>{dataMessage && dataMessage.map((message) => {
            senderInfo = dataUser.find(({ id }) => id === message.user_id)
            return(
              <div key={uuidv4()} className="message-card">
                {(message.body === null || message.body === undefined) ?
                  ""
                :
                  <div key={uuidv4()}>
                    <span className="author">{senderInfo.email}<span className="time">, le {new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(message.created_at))}</span></span>
                    <p>{message.body}</p>
                  </div>
                }
              </div>
            )
          })}</div>
        :
          <Skeleton count={5}/>
      }
      <div>
        <form onSubmit={createMessage}>
          <input type="text" value={content} required onChange={(e) => setContent(e.target.value)} className="text"></input>
          <input type="submit" value="Envoyer" className="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Message;
