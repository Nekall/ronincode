import React from 'react';
import BtnLangage from "components/BtnLangage";

import img_post from 'assets/images/image-test.png';
import avatar from 'assets/images/avatar.jpg';


const CardPost = (article) => {
 console.log(article.data.id)
return(
  <div className="card-post">
    <BtnLangage />
    <h3 className="post-title"><a href="/">{article.data.title}</a></h3>
    <div className="post-author-date">
      <a href="/" className="post-avatar-container">
        <img src={avatar} alt="" />
        <div className="retro-filter"></div>
      </a>
      <h4 className="post-username">Black Widow</h4>
      <span className="date">26/06/2021</span>
    </div>
    <div className="card-post-img-container">
      <a href="/">
        <img src={img_post} alt="Ligne de code sur un écran" />
        <div className="retro-filter"></div>
      </a>
    </div>
    <div className="card-post-txt-container">
      <p className="Lead_paragraph">{article.data.lead}</p>
    </div>
    <a href={`/articles/${article.data.id}`} className="read_more">Lire la suite</a>
  </div>
  
)};

export default CardPost;