import React, {useState, useEffect} from 'react';
import BtnLangage from "components/BtnLangage";

import img_post from 'assets/images/image-test.png';
import avatar from 'assets/images/avatar.jpg';


const CardPost = (article) => {

  const [User, setUser] = useState([])

  useEffect(() => {

    fetch(`http://localhost:3000/users/${article.data.user_id}`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      setUser(dataUser);

      })
    .catch(err => console.error(err));

  }, [article])

 console.log(article.data.user_id)
return(
  <div className="card-post">
    <BtnLangage />
    <h3 className="post-title"><a href="/">{article.data.title}</a></h3>
    <div className="post-author-date">
      <a href="/" className="post-avatar-container">
        <img src={avatar} alt="" />
        <div className="retro-filter"></div>
      </a>
      <h4 className="post-username">{User.username} </h4>
      <span className="date">{article.data.created_at.substring(0, 10)}</span>
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