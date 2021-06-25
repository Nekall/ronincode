import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const ShowArticle = () => {
    const { articleSlug } = useParams();
    const [article, setArticle] = useState([]);
    const history = useHistory();
    const id = Cookies.get('id');

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
        // eslint-disable-next-line
    }, [])

      const goEdit = () => {
        history.push(`/blog/edit/${article.id}`)
      }

      let user = article.user;

    if (article !== undefined) {
      return (
        <div className = "Article">
          <div className="ContentArticle" >
            <div className="Column1">
              <h1>{article.title}</h1>
              <h3>{article.lead}</h3>
              <p>{article.content}</p>
              {user? <p>{user.username}</p> : ""}
            </div>
            <div className="Column2">
              <h2>Technologies</h2>
              <div className="Techno">{article.technologies && article.technologies.map(({name, img}, index) =>
                <div key={uuidv4()}  className="Option">
                  {article? <p>{article.technologies[0].name}</p> : ""}
                </div>
              )}</div>
              {article.user_id === id ? "" : <button onClick={goEdit}>Modifier l'article</button>}
            </div>
          </div>
        </div>
  );
} else {
  return (
    <p>
      Article introuvable
    </p>
  )
}
}

export default ShowArticle
