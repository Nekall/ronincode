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
    //controle s'il y a eu des modifications et finalise 'data'
    let title = document.getElementById('title-article').value;
    if(title === ""){
      title = currentArticle.title;
    }
    let lead = document.getElementById('lead-article').value;
    if(lead === ""){
      lead = currentArticle.lead;
    }
    let content = document.getElementById('content-article').value;
    if(content === ""){
      content = currentArticle.content;
    }
    let data = {"resource": { "title": title, "lead": lead, "content": content}};
    console.log(data);
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

//ajout d'une techno
    const updateTechno = (e) => {
      e.preventDefault();
      let checkTechno = false;
      let techno1 = document.getElementById("techno1").value
      if(techno1 !== "false"){
      //si la value differente de false et d'un techno existantes alors fetch
      currentArticle.technologies.forEach((techno) => {
        if(techno.id === parseInt(techno1)){
          checkTechno = true;
        }
        console.log(checkTechno);
      });
      if(checkTechno === false){
        let data = {
        "resources_technology" :{
          "resource_id": parseInt(articleSlug),
          "technology_id": parseInt(techno1),
        }}
          fetch(`https://ronincode.herokuapp.com/resources_technologies/`, {
            method : "POST",
            headers : {
              'Authorization': token,
              "Content-Type" : "application/json",
            },
            body : JSON.stringify(data)
          })
          .then((response) => response.json())
        }
      }
    }

      //suppression d'une techno
          const deleteTechno = () => {
            let techno1 = document.getElementById("techno1").value
            let id = null;
              fetch(`https://ronincode.herokuapp.com/resources_technologies/${id}`, {
                method : "DELETE",
                headers : {
                  'Authorization': token,
                  "Content-Type" : "application/json",
                },
              })
              .then((response) => response.json())
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
              <input id="title-article" minLength="10" className="ArticleTitle" name="title" placeholder="Titre de l'article" type="text"></input>
              <textarea id="lead-article" minLength="10" maxLength="140"  className="ArticleLead" name="lead" placeholder="Introduction" type="textarea"></textarea>
              <textarea id="content-article" minLength="100" className="ArticleContent" name="content" placeholder="Contenu de l'article" type="textarea"></textarea>
              <input className="btn-modify-article" type="submit" value="Modifier"/>
            </div>
            <div className="Column2">
              <div className="Technologies">
                <h2>Technologies</h2>
                {currentArticle && currentArticle.technologies.map(techno => {
                  return <p>{techno.name}</p>
                })}
                  <select className="select-article" name="techno" id="techno1" onChange={updateTechno}>
                    <option value="false">Technologie</option>
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
