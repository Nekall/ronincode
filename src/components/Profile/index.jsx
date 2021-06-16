import React from 'react';
import avatar from 'assets/images/avatar.jpg';
import BtnLangage from 'components/BtnLangage';
import CardPostMini from 'components/CardPostMini';

const Profile = () => (
  <>
    <div className="profile-container">

      <div className="avatar-container">
        <div className="avatar-content">
          <img src={avatar} alt="" />
          <div className="retro-filter"></div>
        </div>
      </div>

      <div className="profile-info-container">
        <div>Black_Widow</div>
        {/* <BtnLangage /> */}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, dignissimos fugit nisi nesciunt inventore enim, nostrum nulla excepturi cum tempore accusantium necessitatibus ducimus autem animi temporibus quasi iure tenetur quos!</p>
        <a href="/" className="btn-message">Message</a>
      </div>
    </div>

    <h4>Mentors</h4>
    <ul>
      <li>Day101</li>
    </ul>

    <h4>Disciples</h4>
    <ul>
      <li>Captain_A</li>
    </ul>

    <h4>Publications</h4>
    <ul>
      <li><CardPostMini /></li>
    </ul>
  </>

);

export default Profile;