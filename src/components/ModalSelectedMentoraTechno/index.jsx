import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFetch from 'Hooks/useFetch';

const ModalSelectedMentoraTechno = (props) => {
  const [myTechno, setMyTechno] = useState('');
  const [dataForDelete, setDataForDelete] = useState('');
  const [technoParse, setTechnoParse] = useState('');
  let nameTechno = '';
  
  const Fetch = () => {
    fetch('https://ronincode.herokuapp.com/users_technologies',{
      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      setMyTechno(dataUser);
    })
    .catch(err => console.error(err));
  };
  
  const setIdTechno = (e) => {
    e.preventDefault();
    setTechnoParse(parseInt(document.getElementById('selected-techno').value))
  };

  const dataSend = {
    user_id: props.id_user_profile,
    technology_id: technoParse,
  };
  
  const {data: sync, doFetch: fetchSendMyTechno } = useFetch('POST', dataSend);

  const [dataMentor, setDataMentor] = useState();

  const {data: reSync, doFetch: fetchSendMyBoolean } = useFetch('PUT', dataMentor);

  const checkIsMentor = () => {
    fetch(`https://ronincode.herokuapp.com/users/${props.id_user_profile}`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      //console.log(dataUser.technologies.length);
      //console.log('dans la function avec la techno charger');
      let verified = false;
      if (dataUser.technologies.length !== 0) {
        //console.log('je suis toujour un mentor');
        verified = true;
        setDataMentor({user: {is_mentor: true}});
      } else {
        setDataMentor({user: {is_mentor: false}});
      }
      if (verified === false) {
        //console.log('retire is mentor');
        setDataMentor({user: {is_mentor: false}});
        fetchSendMyBoolean(`users/${props.id_user_profile}`);
      };
    })
    .catch(err => console.error(err));
  };
  
  const sendLanguage = (e) => {
    e.preventDefault();
    let noSpam = false;
    myTechno.forEach((myContent) => {
      if (technoParse === myContent.technology_id && myContent.user_id === props.id_user_profile) {
        noSpam = true;
      }
    });
    if (noSpam === false) {
      //console.log('jai push ta techno');
      fetchSendMyTechno('users_technologies');
      setDataMentor({user: {is_mentor: true}});
      fetchSendMyBoolean(`users/${props.id_user_profile}`);
      checkIsMentor();
    };
  };

  const dataDelete = {
    users_technoligies: `${dataForDelete}`,
  };

  const {data: syncDelete, doFetch: fetchDelete } = useFetch('DELETE', dataDelete);

  const deleteThis = (idJoinTable) => {
    setDataForDelete(idJoinTable);
    fetchDelete(`users_technologies/${idJoinTable}`);
    checkIsMentor();
  };

  useEffect(() => {
    Fetch();
    checkIsMentor();
    // eslint-disable-next-line
  }, [sync, syncDelete]);

  return(
    <div>
      <p>test list techno</p>
      {myTechno !== undefined  ?
        <div>
          <div>
            <p>les techno que je veux mentorer</p>
              <div className="user-box">
                <form onSubmit={sendLanguage}>
                  <label>Choose a Techno:</label>
                  <select id="selected-techno" name="techno" onChange={setIdTechno}>
                    {props.allTechno && props.allTechno.map((listTechno) => {
                      return(<option key={uuidv4()} value={listTechno.id}>{listTechno.name}</option>)
                    })}
                  </select>
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
                  return(<li key={uuidv4()}>{nameTechno.name}: <button onClick={()=>deleteThis(listMyTechno.id)}>X</button></li>);
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