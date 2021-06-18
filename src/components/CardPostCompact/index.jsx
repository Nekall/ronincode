import React from 'react';
import BtnLangage from "components/BtnLangage";
import img_post from 'assets/images/image-test.png';
//import avatar from 'assets/images/avatar.jpg';

const CardPostCompact = (props) => {
  return(
    <div>
      {props.data && props.data.map((article, index) =>{
        return(
          <div className="card-postCompact" key={index}>
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
                  <h4 className="post-username">{props.username}</h4>
                  <span className="date">{article.created_at.substring(0, 10)}</span>
                </div>
                <h3 className="post-title"><a href="/">{article.title}</a></h3>
                <div className="card-post-txt-container">
                  <p className="Lead_paragraph">{article.lead}</p>
                </div>
              </div>
            </div>
            <a href={`/articles/${article.id}`} className="read_more">Lire la suite</a>
          </div>
        )
      })}
    </div>
  )
};

export default CardPostCompact;
