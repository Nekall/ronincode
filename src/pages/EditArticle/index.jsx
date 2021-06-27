import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';
import './style.css';

const EditArticle = () => {
  const [currentArticle, setCurrentArticle] = useState();
  const [technologies, setTechnologies] = useState([]);
  const [articleInfo, setarticleInfo] = useState([]);
  const { articleSlug } = useParams();
  const token = Cookies.get('token');
  const history = useHistory();
  const [data, setData] = useState({
    title: articleInfo.title,
    lead: articleInfo.lead,
    content: articleInfo.content,
  });

    const getCurrentArticle = () => {
      fetch(`https://ronincode.herokuapp.com/resources/${articleSlug}`, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setCurrentArticle(data)
      })
    }

    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      })
    };

    const handleFetch = (e) => {
      e.preventDefault();
    fetch(`https://ronincode.herokuapp.com/resources/${articleSlug}`, {
      method : "PUT",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(data => { setarticleInfo(data)
        history.push(`/blog/${articleSlug}`)
      })
    }

    const updateTechno = (e) => {
      e.preventDefault();
      let techno1 = document.getElementById("techno1").value
      let joindata = {
        resource_id: parseInt(articleSlug),
        technology_id: parseInt(techno1),
      }
      if(techno1 === currentArticle.technologies[0].id){
        fetch(`https://ronincode.herokuapp.com/resources_technologies/`, {
          method : "PUT",
          headers : {
            'Authorization': token,
            "Content-Type" : "application/json",
          },
          body : JSON.stringify(joindata)
        })
        .then((response) => response.json())
      }
      }

      const makeitFetch = (data) => {
        handleFetch(data);
      }

    const technoFetch = () => {
      fetch(`https://ronincode.herokuapp.com/technologies/`, {
        method : "GET",
        headers : {
          "Content-Type" : "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data)
      })
    }

    useEffect(() => {
      getCurrentArticle()
      technoFetch();
    }, [])

    return (
      <div className = "editArticle">
        <h1>Modifier l'Article</h1>
        <div>
          <h3>Prévisualisation</h3>
          <p>_</p>
          {currentArticle ?
            <>
            <h4>{currentArticle.lead}</h4>
            <h5>{currentArticle.content}</h5>
            <p>{currentArticle.title}</p>
            </>
            : ""
          }
        </div>
        <form className="form" onSubmit={makeitFetch}>
          <div className="ContentArticle" >
            <div className="Column1">
              <input minLength="10" type="text" className="ArticleTitle" name="title" placeholder="Titre de l'article" onFocus={(e) => e.target.placeholder = ''}  onBlur={(e) => e.target.placeholder = "Titre de l'article"} onChange={handleChange}></input>
              <textarea minLength="10" maxLength="140"  className="ArticleLead" name="lead" placeholder="Introduction" type="textarea" onChange={handleChange}></textarea>
              <textarea minLength="100" className="ArticleContent" name="content" placeholder="Contenu de l'article" type="textarea"  onChange={handleChange}></textarea>
              <input type="submit" value="modifier"/>
            </div>
            <div className="Column2">
              <div className="Technologies">
                <h2>Technologies</h2>
                // currrent techno ici
                  <select name="techno" id="techno1">
                    {technologies && technologies.map(({name, id}, index) =>
                      <option key={uuidv4()} value={id}>{name}</option>
                    )}
                  </select>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
}

export default EditArticle;
//{currentArticle ? <p>{currentArticle.technologies[0].name}</p> : ""}
