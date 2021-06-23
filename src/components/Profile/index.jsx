import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import avatar from 'assets/images/avatar.jpg';
import BtnLangage from 'components/BtnLangage';
import CardPostCompact from 'components/CardPostCompact';
import ModalCreateConversation from 'components/ModalCreateConversation';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const Profile = () => {
  const { id_user } = useParams();
  let id_user_profile = parseInt(id_user);
  let id_cookie = Cookies.get('id');
  let id_current = parseInt(id_cookie);
  const logged = useSelector((state) => state.logReducer.logged);
  const {data: dataUser, doFetch: fetchUser } = useFetch();
  let [ifClicked, setIfClicked] = useState(false);

  const FetchDataUser = () => {
    fetchUser(`users/${id_user_profile}`);
  };

  const clicked = () => {
    setIfClicked(!ifClicked);
  };

  useEffect(() => {
    FetchDataUser();
  }, [])

  console.log(id_user);

  return(
    <>
      {dataUser ?
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
                <div className="username">{dataUser.username} ({dataUser.firstname} {dataUser.lastname})</div>
                {logged && (id_current !== id_user_profile) ? 
                  <div>
                    <Link to="/" className="btn-message">Prendre RDV</Link>
                    <button onClick={clicked} className="btn-message">Crée une conversation avec {dataUser.email}</button>
                    {ifClicked ? <ModalCreateConversation id={id_user_profile} /> : ""}
                  </div>
                  :
                  <div>
                    <Link to="/conversations" className="btn-message">Mes Conversations</Link>
                    <Link to={`/users/${id_user_profile}/edit`} className="btn-message">Edit Profile</Link>
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
        :
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
                <div className="username"><Skeleton/></div>
                {logged && (id_current !== id_user_profile) ? 
                  <div>
                    <Link to="/" className="btn-message">Prendre RDV</Link>
                    <button onClick={clicked} className="btn-message">Crée une conversation avec <Skeleton/></button>
                    {ifClicked ? <ModalCreateConversation id={id_user_profile} /> : ""}
                  </div>
                  :
                  <div>
                    <Link to="/conversations" className="btn-message">Mes Conversations</Link>
                    <Link to={`/users/${id_user_profile}/edit`} className="btn-message">Edit Profile</Link>
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
      }
    </>
  )
};

export default Profile;

//{dataUser && dataUser.resources ? <CardPostCompact data={dataUser.resources} username={dataUser.username}/> : "Aucun article n'a été trouvé"}