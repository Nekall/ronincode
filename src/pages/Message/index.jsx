import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchWithBearer } from 'services/Fetch';

const Message = () => {
  const dispatch = useDispatch();
  const { conversationId } = useParams();
  const Messages = useSelector(state => state.fetchReducer.alldata);

  const allMessages = () => {
    dispatch(FetchWithBearer(`https://ronincode.herokuapp.com/privatemessagings/${conversationId}/messages`, "GET", 2));
  };

  useEffect(() => {
    allMessages();
  }, [])

  console.log(conversationId);
  return(
    <div>
      <h1> Messages </h1>
      <div>{Messages && Messages.map((message) =>
        <div>
          <p key={message.id}> Body: {message.body} </p>
        </div>
      )}
      </div>
    </div>
  )

}

export default Message;
