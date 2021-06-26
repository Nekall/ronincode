import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import BtnTechno from 'components/BtnTechno';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const ShowArticle = () => {
  const [userId, setUserId] = useState(Cookies.get('id'));
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
    <div className = "Article">
    <div className="Techno">{article.technologies && article.technologies.map(({name, img}, index) =>
    <div key={uuidv4()}  className="Option">
    {article.technologies? <BtnTechno techno={article.technologies[0].name} /> : ""}
    </div>
  )}
    </div>
      <div className="ContentArticle" >
        <div className="Column1">
          <h1>{article.title}</h1>
          <h3>{article.lead}</h3>
          <p>{article.content}</p>
          {article.user? <p>{article.user.username}</p>:""}
        </div>
      </div>
      {article.user_id === parseInt(userId) ? <button onClick={goEdit}>Modifier l'article</button> : ""}
    </div>
  );
}

export default ShowArticle
