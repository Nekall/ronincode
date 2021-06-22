import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import BtnLangage from 'components/BtnLangage';
import CardPostCompact from 'components/CardPostCompact';
import ModalCreateConversation from 'components/ModalCreateConversation';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const Profile = () => {
  const { id_user } = useParams();
  let id = Cookies.get('id');
  const logged = useSelector((state) => state.ready);
  const {data, doFetch: fetchUser } = useFetch();
  const [ifClicked, setIfClicked] = useState(false);

  const FetchDataUser = () => {
    fetchUser(`users/${id_user}`);
  };

  const test = () => {
    setIfClicked(!ifClicked);
  };

  useEffect(() => {
    FetchDataUser();
  }, [])

  console.log(data);
  console.log(ifClicked);

  return(
    <>
      <div className="profile-container">
        <div className="infos-container">
          <div className="avatar-container">
            <div className="avatar-content">
              <img className="avatar" src={avatar} alt="" />
              <div className="retro-filter"></div>
            </div>
          </div>
          <div className="txt-container">
            <div className="contact">
              
              {logged && (id !== id_user) ? 
                <div>
                </div>
                :
                <div>
                  <Link to="/conversations" className="btn-message">Mes Conversations</Link>
                  <Link to={`/users/${id_user}/edit`} className="btn-message">Edit Profile</Link>
                  <Link to="/" className="btn-message">Prendre RDV</Link>
                  <button onClick={test}>Crée une conversation avec {}</button>
                  {ifClicked ? <ModalCreateConversation id={id_user} /> : ""}
                </div>
              }
            </div>
            <BtnLangage />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, dignissimos fugit nisi nesciunt inventore enim, nostrum nulla excepturi cum tempore accusantium necessitatibus ducimus autem animi temporibus quasi iure tenetur quos!</p>
          </div>
        </div>
        <div className="date">
          <ul>
            Prochain rendez-vous
            <li>
              <div className="dm-container">
                <div className="day">20</div>
                <div className="month">septembre</div>
              </div>
              <div className="txt-container">
                <div className="title">14h30 : Mentorat - Mentor : <Link to="/">Day101</Link></div>
                <BtnLangage />
              </div>
            </li>
            <li>
              <div className="dm-container">
                <div className="day">20</div>
                <div className="month">septembre</div>
              </div>
              <div className="txt-container">
                <div className="title">14h30 : Mentorat - Mentor : <Link to="/">Day101</Link></div>
                <BtnLangage />
              </div>
            </li>
          </ul>
        </div>
        <div className="mentoring-section">
          <ul>
            <div className="title">Mentors</div>
            <li><Link to="/">Item 1</Link></li>
            <li><Link to="/">Item 2</Link></li>
            <li><Link to="/">Item 3</Link></li>
          </ul>
          <ul>
          <div className="title">Disciples</div>
            <li><Link to="/">Item 1</Link></li>
            <li><Link to="/">Item 2</Link></li>
            <li><Link to="/">Item 3</Link></li>
          </ul>
        </div>
        <div className="cardGroupCompact">
          
        </div>
      </div>
    </>
  )
};

export default Profile;

//<div className="username">{data.username} ({data.firstname} {data.lastname})</div>

//{data.resources ? <CardPostCompact data={data.resources} username={data.username}/> : "Aucun article n'a été trouvé"}

//data.email