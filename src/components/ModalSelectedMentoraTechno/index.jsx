import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BtnTechno from 'components/BtnTechno';
import useFetch from 'Hooks/useFetch';
import Cookies from "js-cookie";

const ModalSelectedMentoraTechno = (props) => {
  const [dataForDelete, setDataForDelete] = useState('');
  const [myTechno, setMyTechno] = useState('');
  const [refrech, setRefrech] = useState(false);
  const cookie = Cookies.get("token");
  let technoParse = "";
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
    technoParse = (parseInt(document.getElementById('selected-techno').value))
  };

  const fetchSendMyTechno = (payload) => {
    fetch('https://ronincode.herokuapp.com/users_technologies',{
      method:'POST',
      headers: {
        Authorization: `${cookie}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .catch(err => console.error(err));
    setRefrech(!refrech);
  };

  const fetchSendMyBoolean = (payload) => {
    fetch(`https://ronincode.herokuapp.com/users/${props.id_user_profile}`,{
      method:'PUT',
      headers: {
        Authorization: `${cookie}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .catch(err => console.error(err));
  };

  const checkIsMentor = () => {
    fetch(`https://ronincode.herokuapp.com/users/${props.id_user_profile}`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      let verified = false;
      if (dataUser.technologies.length !== 0) {
        verified = true;
      }
      if (verified === false) {
        fetchSendMyBoolean({user: {is_mentor: false}});
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
      fetchSendMyTechno({user_id: props.id_user_profile,technology_id: technoParse,});
      fetchSendMyBoolean({user: {is_mentor: true}});
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
  }, [refrech, syncDelete]);

  return(
    <div className="techno-selection-container">
      {myTechno !== undefined  ?
        <>
          {props.logged && (props.id_current === props.id_user_profile) ?
              <form onSubmit={sendLanguage}>
                <select id="selected-techno" name="techno" onChange={setIdTechno}>
                  <option>Choisir une technologie</option>
                  {props.allTechno && props.allTechno.map((listTechno) => {
                    return(<option key={uuidv4()} value={listTechno.id}>{listTechno.name}</option>)
                  })}
                </select>
                <input type="submit" value="Ajouter" />
              </form>
            :
            ""
          }
          <div className="my-tech">Mes techno's :</div>
          {myTechno && myTechno.map((listMyTechno) => {
            if (listMyTechno.user_id === props.id_user_profile) {
              nameTechno = props.allTechno.find(({ id }) => id === listMyTechno.technology_id)
              return(
                <div key={uuidv4()} className="btn-group">
                  {props.logged && (props.id_current === props.id_user_profile) ?
                    <span key={uuidv4()}><BtnTechno techno={nameTechno.name} /><button onClick={()=>deleteThis(listMyTechno.id)}>X</button></span>
                    :
                    <span key={uuidv4()}><BtnTechno techno={nameTechno.name} /></span>
                  }
                </div>
              )
            }
          })}
        </>
      :
        ""
      }
    </div>
  );
};

export default ModalSelectedMentoraTechno;
