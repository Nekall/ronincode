import img_post from 'assets/images/image-test.png';
import React, {useState, useEffect} from 'react';
import avatar from 'assets/images/avatar.jpg';
import { Link } from 'react-router-dom';


const CardPostCompact = (article) => {
  const [User, setUser] = useState([])
  useEffect(() => {

    fetch(`https://ronincode.herokuapp.com/users/${article.data.user_id}`,{
      method:'GET',
    })
    .then((response) => response.json())
    .then((dataUser) => {
      setUser(dataUser);
      })
    .catch(err => console.error(err));
  }, [article])

  return(
    <Link to={`/blog/${article.data.id}`} className="card-postCompact">
      <span className="date">{article.data.created_at.substring(0, 10)}</span>
      <div className="card-post-img-container">
        <Link to="/">
          <img src={img_post} alt="Ligne de code sur un écran" />
          <div className="retro-filter"></div>
        </Link>
      </div>
      <div className="card-txt">
        <div className="post-author-date">
          <Link to="/" className="post-avatar-container">
            <img src={avatar} alt="" />
            <div className="retro-filter"></div>
          </Link>
          <h4 className="post-username">{User.username} </h4>
        </div>
        <h3 className="post-title"><a href="/">{article.data.title}</a></h3>
        <div className="card-post-txt-container">
          <p className="Lead-paragraph">{article.data.lead}</p>
        </div>
      </div>
    </Link>
  )
};

export default CardPostCompact;
