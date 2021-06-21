import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'Hooks/useFetch';

const Message = () => {
  const { conversationId } = useParams();
  const { data: dataMessage, doFetch: findMessage } = useFetch();

  const allMessages = () => {
    findMessage(`${conversationId}/messages`);
  };

  useEffect(() => {
    allMessages();
  }, [])

  return(
    <div>
      <h1> Messages </h1>
      <div>{dataMessage && dataMessage.map((message) =>
        <div>
          <p key={message.id}> Body: {message.body} </p>
        </div>
      )}
      </div>
    </div>
  )

}

export default Message;
