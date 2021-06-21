import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import BtnLangage from 'components/BtnLangage';
import CardPostCompact from 'components/CardPostCompact';
import ModalCreateConversation from 'components/ModalCreateConversation';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';
//import { useParams } from 'react-router-dom';

const Profile = () => {
  //let {userId} = useParams();
  let id = Cookies.get('id');
  const {data: UserData, doFetch: fetchUser } = useFetch();

  const FetchDataUser = () => {
    fetchUser(`users/${id}`);
  };

  useEffect(() => {
    FetchDataUser();
  }, [])

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
              <div className="username">{UserData.username} ({UserData.firstname} {UserData.lastname})</div>
              <Link to="/" className="btn-message">Prendre RDV</Link>
              <Link to="/conversations" className="btn-message">Mes Conversations</Link>
              <div>
                <button>Crée une conversation avec {UserData.email}</button>
                <ModalCreateConversation value={id} />
              </div>
              <Link to={`/users/${id}/edit`} className="btn-message">Edit Profile</Link>
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
          {UserData.resources ? <CardPostCompact data={UserData.resources} username={UserData.username}/> : "Aucun article n'a été trouvé"}
        </div>
      </div>
    </>
  )
};

export default Profile;
