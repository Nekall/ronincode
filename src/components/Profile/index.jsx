import React, {useState, useEffect} from 'react';
import avatar from 'assets/images/avatar.jpg';
import BtnLangage from 'components/BtnLangage';
import CardPostCompact from 'components/CardPostCompact';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
const Profile = () => {

  const id = Cookies.get('id')
  const [User, setUser] = useState([])
  const {userId} = useParams();

  useEffect(() => {


    fetch(`https://ronincode.herokuapp.com/users/${id}`,{ 

      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      setUser(dataUser);
      
      })
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
              <div className="username">{User.username} ({User.firstname} {User.lastname})</div>
              <a href="/" className="btn-message">Prendre RDV</a>
              <a href="/" className="btn-message">Message</a>
              <a href={`/users/${id}/edit`} className="btn-message">Edit Profile</a>
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
                <div className="title">14h30 : Mentorat - Mentor : <a href="/">Day101</a></div>
                <BtnLangage />
              </div>
            </li>
            <li>
              <div className="dm-container">
                <div className="day">20</div>
                <div className="month">septembre</div>
              </div>
              <div className="txt-container">
                <div className="title">14h30 : Mentorat - Mentor : <a href="/">Day101</a></div>
                <BtnLangage />
              </div>
            </li>
          </ul>
        </div>

        <div className="mentoring-section">
          <ul>
            <div className="title">Mentors</div>
            <li><a href="/">Item 1</a></li>
            <li><a href="/">Item 2</a></li>
            <li><a href="/">Item 3</a></li>
          </ul>
          <ul>
          <div className="title">Disciples</div>
            <li><a href="/">Item 1</a></li>
            <li><a href="/">Item 2</a></li>
            <li><a href="/">Item 3</a></li>
          </ul>
        </div>
        <div className="cardGroupCompact">
          {User.resources && User.resources.map((article) => {
              <div>
                <CardPostCompact data={article}/>
              </div>
          }  
          )}
        </div>
      </div>


    </>

)
};

export default Profile;