import React from 'react';
import BtnLangage from "components/BtnLangage";

import img_post from 'assets/images/image-test.png';
import avatar from 'assets/images/avatar.jpg';


const CardPostMini = () => (

  <div className="card-postMini">
    <div className="post-content">
      <div className="card-post-img-container">
        <a href="/">
          <img src={img_post} alt="Ligne de code sur un écran" />
          <div className="retro-filter"></div>
        </a>
      </div>
      <div>
        <BtnLangage />
        <h3><a href="/" className="title-post">Le guide du débutant : quelles différences entre&nbsp;UX/UI ?</a></h3>
        <div className="post-avatar">
          <a href="/" className="post-avatar-img-container">
            <img src={avatar} alt="" />
            <div className="retro-filter"></div>
          </a>
          <h4>Black Widow</h4>
          <span className="date">26/06/2021</span>
        </div>
      </div>
    </div>
    <a href="/" className="read_more">Lire la suite</a>
  </div>
  
);

export default CardPostMini;