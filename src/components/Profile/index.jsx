import React from 'react';
import avatar from 'assets/images/avatar.jpg';
import BtnLangage from 'components/BtnLangage';
import CardPostMini from 'components/CardPostMini';

const Profile = () => (
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
            <div className="username">Black_Widow</div>
            <a href="/" className="btn-message">Prendre RDV</a>
            <a href="/" className="btn-message">Message</a>
          </div>

          <BtnLangage />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, dignissimos fugit nisi nesciunt inventore enim, nostrum nulla excepturi cum tempore accusantium necessitatibus ducimus autem animi temporibus quasi iure tenetur quos!</p>
        </div>
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

      <div>
        <CardPostMini />
        <CardPostMini />
        <CardPostMini />
      </div>

    </div>


  </>

);

export default Profile;