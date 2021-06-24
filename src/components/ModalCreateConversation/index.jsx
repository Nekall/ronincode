import React, { useState, useEffect } from 'react'
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const ModalCreateConversation = (props) => {
  const senderId = Cookies.get('id');
  let idSender = parseInt(senderId);
  let idRecipient = parseInt(props.id);
  const [content, setContent] = useState('')
  const [showOrRemove, setShowOrRemove] = useState(true)
  const [onScreen, setOnScreen] = useState(true)
  let privatemessaging = '';

  const dataConversation = {
    sender_id: idSender,
    recipient_id: idRecipient,
  }

  const dataMessage = {
    body: content,
    user_id: idSender,
  }

  const { doFetch: createConversation } = useFetch("POST", dataConversation);
  const { data, doFetch: findFetchMessage } = useFetch();
  const { doFetch: createFetchMessage } = useFetch("POST", dataMessage);
   
  const createMessage = (e) => {
    e.preventDefault();
    privatemessaging = data.find((id) => id.recipient_id === idRecipient && id.sender_id === idSender )
    createFetchMessage(`privatemessagings/${privatemessaging.id}/messages`);
  };

  const remove = () => {
    setShowOrRemove(!showOrRemove);
    setInterval(function(){ 
      setOnScreen(!onScreen);
    }, 2000);
  };

  useEffect(() => {
    createConversation("privatemessagings");
    findFetchMessage("privatemessagings");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {onScreen ?
        <div className={showOrRemove ? "modalShow" : "modalRemove"}>
          <button onClick={remove}>X</button>
          <form onSubmit={createMessage}>
            <div className="user-box">
              <label className="label-form-message">Vôtre message</label>
              <input type="text" value={content} required onChange={(e) => setContent(e.target.value)}></input>
            </div>
            <input type="submit" onClick={remove} value="Envoyer" />
          </form>
        </div>
        :
        ""
      }
    </>
  )
}

export default ModalCreateConversation;