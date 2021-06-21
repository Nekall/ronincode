import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const Message = () => {
  const senderId = Cookies.get('id');
  let idSender = parseInt(senderId);
  const { conversationId } = useParams();
  const { data: dataMessage, doFetch: findMessage } = useFetch();
  const { doFetch: createFetchMessage } = useFetch("POST", sendDataMessage);
  const [content, setContent] = useState('')

  const sendDataMessage = {
    body: content,
    user_id: idSender,
  }

  const allMessages = () => {
    findMessage(`privatemessagings/${conversationId}/messages`);
  };

  const createMessage = (e) => {
    e.preventDefault();
    createFetchMessage(`privatemessagings/${conversationId}/messages`);
  };

  useEffect(() => {
    allMessages();
  }, [dataMessage])

  return(
    <div>
      <h1> Messages </h1>
      <div>{dataMessage && dataMessage.map((message) =>
        <div>
          <p key={message.id}> Body: {message.body} </p>
          <span key={message.id}>Envoyer par: {message.email} à: {message.timestamp}</span>
        </div>
      )}
      </div>
      <div>
        <form onSubmit={createMessage}>
          <div className="user-box">
            <label className="label-form-log">Vôtre message</label>
            <input type="text" value={content} required onChange={(e) => setContent(e.target.value)}></input>
          </div>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  )

}

export default Message;
