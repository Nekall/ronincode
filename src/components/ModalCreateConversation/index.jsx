import React, { useState, useEffect } from 'react'
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const ModalCreateConversation = (props) => {
  const senderId = Cookies.get('id');
  let idSender = parseInt(senderId);
  const [content, setContent] = useState('')

  const dataConversation = {
    sender_id: idSender,
    recipient_id: props.id,
  }

  const dataMessage = {
    body: content,
    user_id: idSender,
  }

  const { data, doFetch: createConversation } = useFetch("POST", dataConversation);
  const { doFetch: createFetchMessage } = useFetch("POST", dataMessage);
   

  const createMessage = (e) => {
    e.preventDefault();
    createFetchMessage(`privatemessagings/${data.privatemessagings_id}/messages`);
  };

  useEffect(() => {
    createConversation("privatemessagings");
  }, []);

  return (
    <div>
      <form onSubmit={createMessage}>
          <div className="user-box">
            <label className="label-form-log">Vôtre message</label>
            <input type="text" value={content} required onChange={(e) => setContent(e.target.value)}></input>
          </div>
          <input type="submit" value="Envoyer" />
        </form>
    </div>
  )
}

export default ModalCreateConversation;
