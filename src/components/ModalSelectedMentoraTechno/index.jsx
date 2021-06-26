import React, { useState, useEffect } from 'react';
import useFetch from 'Hooks/useFetch';

const ModalSelectedMentoraTechno = (props) => {
  const [content, setContent] = useState('');
  let technoParse = parseInt(content);
  const [myTechno, setMyTechno] = useState('');
  let nameTechno = '';
  let test = [];

  const dataMentor = {
    users: {
      is_mentor: true,
    }
  };

  const dataSend = {
    user_id: props.id_user_profile,
    technology_id: technoParse,
  };

  const {data: sync, doFetch: fetchSendMyTechno } = useFetch('POST', dataSend);
  const {doFetch: fetchSendMyBoolean } = useFetch('POST', dataMentor);

  const Fetch = () => {
    fetch('https://ronincode.herokuapp.com/users_technologies',{
      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      setMyTechno(dataUser);
      })
    .catch(err => console.error(err));
    console.log(myTechno);
  };

  const findMyTechno = () => {
    if (myTechno !== undefined) {
      for (let i = 0; i < myTechno.length; i++) {
        if (myTechno[i].user_id === props.id_user_profile) {
          test.push(myTechno[i].technology_id);
        };
      };
      console.log(test);
      console.log(props.allTechno);
    };
  };

  const sendLangage = (e) => {
    e.preventDefault();
    fetchSendMyTechno('users_technologies');
    if (props.dataAllUser.id === props.id_user_profile && props.dataAllUser.is_mentor === false) {
      fetchSendMyBoolean(`users/${props.id_user_profile}`);
    };
  };

  useEffect(() => {
    Fetch();
    // eslint-disable-next-line
  }, [sync]);

  return(
    <div>
      <p>test list techno</p>
      {myTechno !== undefined  ?
        <div>
          {myTechno !== undefined ? (findMyTechno()) : ""}
          <div>
            <p>les techno que je veux mentorer</p>
              <div className="user-box">
                <form onSubmit={sendLangage}>
                  {props.allTechno && props.allTechno.map((listTechno) => {
                    if (listTechno.id !== 4) {
                    return(
                      <>
                      <p>{test}</p>
                        <label className="label-form-techno">{listTechno.name}</label>
                        <input type="checkbox" value={listTechno.id} onChange={(e) => setContent(e.target.value)}></input>
                      </>
                    )};
                  })}
                  <input type="submit" value="Envoyer" />
                </form>
              </div>
          </div>
          <div>
            <p>mes techno</p>
            <ul>
              {myTechno && myTechno.map((listMyTechno) => {
                if (listMyTechno.user_id === props.id_user_profile) {
                  nameTechno = props.allTechno.find(({ id }) => id === listMyTechno.technology_id)
                  return(<li>{nameTechno.img}{nameTechno.name}</li>);
                }
              })}
            </ul>
          </div>
        </div>
      :
        ""
      }
    </div>
  );
};

export default ModalSelectedMentoraTechno;