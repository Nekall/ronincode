import React from 'react';
import BtnLangage from "components/BtnLangage";

import img_post from 'assets/images/image-test.png';
import avatar from 'assets/images/avatar.jpg';


const CardPostCompact = () => (

  <div className="card-postCompact">

    <div className="card-content">
      <div className="card-post-img-container">
        <a href="/">
          <img src={img_post} alt="Ligne de code sur un écran" />
          <div className="retro-filter"></div>
        </a>
      </div>

      <div className="txt-content">
        <BtnLangage />
        <div className="post-author-date">
          <h4 className="post-username">Black Widow</h4>
          <span className="date">26/06/2021</span>
        </div>
        <h3 className="post-title"><a href="/">Le guide du débutant : quelles différences entre&nbsp;UX/UI ?</a></h3>
        <div className="card-post-txt-container">
          <p className="Lead_paragraph">Vous vous êtes déjà retrouvés face à un site internet avec des milliers d’informations sans trouver réponse à votre question ? À une application...</p>
        </div>
      </div>
    </div>

    <a href="/" className="read_more">Lire la suite</a>
    
  </div>
  
);

export default CardPostCompact;