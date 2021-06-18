import React from 'react';
import BtnLangage from "components/BtnLangage";

import img_post from 'assets/images/image-test.png';
import avatar from 'assets/images/avatar.jpg';


const CardPostCompact = (article) => {
  console.log(article.data.title);
  

  return(
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
            <h4 className="post-username">{article.data.title}</h4>
            <span className="date">{article.data.created_at.substring(0, 10)}</span>
          </div>
          <h3 className="post-title"><a href="/">{article.data.title}</a></h3>
          <div className="card-post-txt-container">
            <p className="Lead_paragraph">{article.data.lead}</p>
          </div>
        </div>
      </div>

      <a href={`/articles/${article.data.id}`} className="read_more">Lire la suite</a>
      
    </div>
  ) 
};

export default CardPostCompact;