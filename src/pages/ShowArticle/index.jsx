import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import BtnTechno from 'components/BtnTechno';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const ShowArticle = () => {
  const [userId] = useState(Cookies.get('id'));
  const [article, setArticle] = useState("");
  const { articleSlug } = useParams();
  const history = useHistory();

    const ArticleFetch = () => {
      fetch(`https://ronincode.herokuapp.com/resources/${articleSlug}`, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
        }
      })
      .then((response) => response.json())
      .then((data) => {
        setArticle(data)
      })
    }

      useEffect(() => {
        ArticleFetch();
    }, [])

    const goEdit = () => {
      history.push(`/blog/edit/${article.id}`)
    }

    return(
    <div className = "article">
      <div className="techno">
        {article.technologies && article.technologies.map(techno => <BtnTechno techno={techno.name}/>)}
      </div>
      <h1>{article.title}</h1>
      <div className="author-head">{article.user ? article.user.username : "" }</div>
      <h2>{article.lead}</h2>
      <p>{article.content}</p>
      <div className="author-end">{article.user ? article.user.username : "" }</div>
      {article.user_id === parseInt(userId) ? <button className="btn-modify" onClick={goEdit}>Modifier</button> : ""}
    </div>
  );
}

export default ShowArticle
