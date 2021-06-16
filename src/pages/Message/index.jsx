import React, {useState, useEffect} from 'react';

const Message = () => {



  const [Messages, setMessages] = useState([])


  useEffect(() => {

    fetch(`http://localhost:3000/Messages`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      setMessages(data);

      })
    .catch(err => console.error(err));

  }, [])

  return(
    <div>
      <h1> Messages </h1>
      <div>{Messages.map((message) =>
        <div>
          <p key={message.id}> Body: {message.body} </p>
         
          
        </div>
      
      )}
      </div>
    </div>
  )

}

export default Message;
