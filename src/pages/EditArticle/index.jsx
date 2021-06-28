import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const EditArticle = () => {
  const [currentArticle, setCurrentArticle] = useState();
  const [technologies, setTechnologies] = useState([]);
  const [articleInfo, setarticleInfo] = useState([]);
  const { articleSlug } = useParams();
  const token = Cookies.get('token');
  const history = useHistory();
  let data = "";

//recuperation des infos de l'articles actuel
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

    //recupération de toutes les techno existantes
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

//mise à jour de l'article
    const updateArticle = (e) => {
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

//mise à jour des techno
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

    useEffect(() => {
      getCurrentArticle()
      technoFetch();
    }, [])

    return (
      <div className = "editArticle">
        <h1>Modifier l'Article</h1>
        <h3 className="preview-title">Prévisualisation</h3>
        <div className="preview-content">
          {currentArticle ?
            <>
            <p className="preview-article">{currentArticle.title}</p>
            <h4 className="preview-article">{currentArticle.lead}</h4>
            <h5 className="preview-article">{currentArticle.content}</h5>
            </>
            : ""
          }
        </div>
        <form className="form" onSubmit={updateArticle}>
          <div className="ContentArticle" >
            <div className="Column1">
              <input minLength="10" className="ArticleTitle" name="title" placeholder="Titre de l'article" type="text"></input>
              <textarea minLength="10" maxLength="140"  className="ArticleLead" name="lead" placeholder="Introduction" type="textarea"></textarea>
              <textarea minLength="100" className="ArticleContent" name="content" placeholder="Contenu de l'article" type="textarea"></textarea>
              <input className="btn-modify-article" type="submit" value="modifier"/>
            </div>
            <div className="Column2">
              <div className="Technologies">
                <h2>Technologies</h2>
                {currentArticle && currentArticle.technologies.map(techno => {
                  <p>{techno.name}</p>
                })}
                  <select className="select-article" name="techno" id="techno1">
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
