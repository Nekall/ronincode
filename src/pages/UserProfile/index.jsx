import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ModalMentoringSection from 'components/ModalMentoringSection';
import CardPostCompact from 'components/CardPostCompact';
import ModalContact from 'components/ModalContact';
import BtnTechno from 'components/BtnTechno';
import Skeleton from 'react-loading-skeleton';
import avatar from 'assets/images/avatar.jpg';
import ModalDate from 'components/ModalDate';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';

const UserProfile = () => {
  const { id_user } = useParams();
  let id_user_profile = parseInt(id_user);
  let id_cookie = Cookies.get('id');
  let id_current = parseInt(id_cookie);
  const logged = useSelector((state) => state.logReducer.logged);
  
  
  const {data: dataAllUser, doFetch: fetchAllUser } = useFetch();
  const {data: dataAppointment, doFetch: fetchAppointment } = useFetch();

  const FetchDataUser = () => {
    fetchAllUser(`users`);
    fetchAppointment('appointments');
  };



  useEffect(() => {
    FetchDataUser();
    // eslint-disable-next-line
  }, [])

  return(
    <>
      {dataAppointment && dataAllUser ?
        <div className="profile-container">
          <div className="infos-container">
            <div className="avatar-container">
              <div className="avatar-content">
                <img className="avatar" src={avatar} alt="" />
                <div className="retro-filter"></div>
              </div>
            </div>
            <div className="txt-container">

              <ModalContact logged={logged} id_current={id_current} id_user_profile={id_user_profile} dataAllUser={dataAllUser} />

              <BtnTechno />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, dignissimos fugit nisi nesciunt inventore enim, nostrum nulla excepturi cum tempore accusantium necessitatibus ducimus autem animi temporibus quasi iure tenetur quos!</p>
            </div>
          </div>
          <ModalDate id_user_profile={id_user_profile} dataAppointment={dataAppointment} dataAllUser={dataAllUser} />
          <ModalMentoringSection id_user_profile={id_user_profile} dataAppointment={dataAppointment} dataAllUser={dataAllUser} />
          
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
                    <button className="btn-message">Prendre RDV</button>
                    <button className="btn-message">Crée une conversation avec <Skeleton/></button>
                  </div>
                  :
                  <div>
                    <button className="btn-message">Mes Conversations</button>
                    <button className="btn-message">Edit Profile</button>
                  </div>
                }
              </div>
              <BtnTechno />
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
                  <BtnTechno />
                </div>
              </li>
              <li>
                <div className="dm-container">
                  <div className="day">20</div>
                  <div className="month">septembre</div>
                </div>
                <div className="txt-container">
                  <div className="title">14h30 : Mentorat - Mentor : <Link to="/">Day101</Link></div>
                  <BtnTechno />
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
  );
};

export default UserProfile;