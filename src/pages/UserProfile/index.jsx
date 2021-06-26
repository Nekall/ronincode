import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ModalSelectedMentoraTechno from 'components/ModalSelectedMentoraTechno';
import ModalMentoringSection from 'components/ModalMentoringSection';
import ModalContact from 'components/ModalContact';
import BtnTechno from 'components/BtnTechno';
import Skeleton from 'react-loading-skeleton';
import avatar from 'assets/images/avatar.jpg';
import ModalDate from 'components/ModalDate';
import useFetch from 'Hooks/useFetch';
import Cookies from 'js-cookie';
import dolorean from 'assets/images/dolorean.jpeg';

const UserProfile = () => {
  const { id_user } = useParams();
  let id_user_profile = parseInt(id_user);
  let id_cookie = Cookies.get('id');
  let id_current = parseInt(id_cookie);
  const logged = useSelector((state) => state.logReducer.logged);
  
  
  const {data: dataAllUser, doFetch: fetchAllUser } = useFetch();
  const {data: dataAppointment, doFetch: fetchAppointment } = useFetch();
  const {data: allTechno, doFetch: fetchAllTechno } = useFetch();

  const FetchDataUser = () => {
    fetchAllUser('users');
    fetchAppointment('appointments');
    fetchAllTechno('technologies');
  };



  useEffect(() => {
    FetchDataUser();
    // eslint-disable-next-line
  }, [])

  return(
    <>
    <div className="hero-mini">
      <img src={dolorean} alt="Dolorean à Tokyo" className="hero-background"/>
    </div>
      {dataAppointment && dataAllUser ?

        <div className="profile-container">
          <div className="avatar">
            <img src={avatar} alt="" />
            <div className="retro-filter"></div>
          </div>
          <ModalContact logged={logged} id_current={id_current} id_user_profile={id_user_profile} dataAllUser={dataAllUser} />
          <ModalDate id_user_profile={id_user_profile} dataAppointment={dataAppointment} dataAllUser={dataAllUser} />
          <ModalMentoringSection id_user_profile={id_user_profile} dataAppointment={dataAppointment} dataAllUser={dataAllUser} />
          <ModalSelectedMentoraTechno logged={logged} id_user_profile={id_user_profile} allTechno={allTechno} dataAllUser={dataAllUser} />
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
                    <button className="btn-message">Messages</button>
                    <button className="btn-message">Editer le profil</button>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="date">
            <ul>
              Prochains rendez-vous
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