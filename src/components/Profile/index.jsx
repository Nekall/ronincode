import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import BtnLangage from 'components/BtnLangage';
import CardPostCompact from 'components/CardPostCompact';
import Cookies from 'js-cookie';
//import { useParams } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState([]);
  //let {userId} = useParams();
  let id = Cookies.get('id');

  useEffect(() => {
    fetch(`https://ronincode.herokuapp.com/users/${id}`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((data) => {setUserData(data)})
    .catch(err => console.error(err));
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
              <div className="username">{userData.username} ({userData.firstname} {userData.lastname})</div>
              <Link to="/" className="btn-message">Prendre RDV</Link>
              <Link to="/" className="btn-message">Message</Link>
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
          {userData.resources ? <CardPostCompact data={userData.resources} username={userData.username}/> : "Aucun article nn'a été trouvé"}
        </div>
      </div>
    </>
  )
};

export default Profile;
