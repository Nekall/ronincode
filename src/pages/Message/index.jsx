import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const Message = () => {
  const senderId = Cookies.get('id');
  let idSender = parseInt(senderId);
  const { conversationId } = useParams();
  const [content, setContent] = useState('')
  
  const sendDataMessage = {
    body: content,
    user_id: idSender,
  }
  
  const { data: dataMessage, doFetch: findMessage } = useFetch();
  const { doFetch: createFetchMessage } = useFetch("POST", sendDataMessage);

  const allMessages = () => {
    findMessage(`privatemessagings/${conversationId}/messages`);
  };

  const createMessage = (e) => {
    e.preventDefault();
    createFetchMessage(`privatemessagings/${conversationId}/messages`);
  };

  console.log(dataMessage);

  useEffect(() => {
    allMessages();
  }, [idSender])

  return(
    <div>
      <h1> Messages </h1>
      <div>{dataMessage && dataMessage.map((message, index) =>
        <div key={index.id}>
          <p key={index.id}> Body: {message.body} </p>
          <span key={index.id}>Envoyer par: {message.email} à: {message.created_at}</span>
        </div>
      )}
      </div>
      <div>
        <form onSubmit={createMessage}>
          <div className="user-box">
            <label className="label-form-message">Vôtre message</label>
            <input type="text" value={content} required onChange={(e) => setContent(e.target.value)}></input>
          </div>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
      <Link to="/conversations" className="btn-message">Mes Conversations</Link>
    </div>
  )

}

export default Message;
