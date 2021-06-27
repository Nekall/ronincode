import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from "react-alert";
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const CreateArticle = () => {
  const [technologies, setTechnologies] = useState([]);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [lead, setLead] = useState('');
  const token = Cookies.get('token');
  const history = useHistory();
  const alert = useAlert();
  const inputData = {
    resource: {
      title: title,
      lead: lead,
      content: content,
    }
  };

    const handleFetch = (e) => {
    e.preventDefault();
    fetch("https://ronincode.herokuapp.com/resources", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        "Authorization": `${token}`
      },
      body : JSON.stringify(inputData)
    })
    .then((response) => response.json())
    .then(data => {
      if(data === undefined){
        return(alert.error("Désolé, une erreur est survenue."));
       } else {
        technoLink(data.id);
        history.push("/blog");
        return(alert.success("Article créé avec succès."));
        }
      })
    };


    const technoLink = (idArticle) => {
      let techno = parseInt(document.getElementById('techno1').value);
      const inputTechno = {
        resource_id: idArticle,
        technology_id: techno,
    };
      fetch(`https://ronincode.herokuapp.com/resources_technologies`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          "Authorization": `${token}`
        },
        body : JSON.stringify(inputTechno)
      })
      .then((response) => response.json())
      .then((data) => {
      })
    };


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
    };

    useEffect(() => {
      technoFetch();
    }, [])

    return (
      <div className = "NewArticle">
        <form className="newform" onSubmit={handleFetch}>
          <div className="Column1">
            <h1>Ajouter un Article</h1>
            <input minLength="10" type="text" value={title} placeholder="Titre de l'article" onChange={(e) => setTitle(e.target.value)}></input>
            <textarea minLength="10" maxLength="140" className="ArticleLead" placeholder="Introduction" type="textarea" value={lead} onChange={(e) => setLead(e.target.value)}></textarea>
            <textarea minLength="100" className="ArticleContent" placeholder="Contenu de l'article" type="textarea" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button>Valider</button>
          </div>
          <div className="Column2">
            <div className="Technologies">
              <h2>Technologies</h2>
                <select name="techno" id="techno1">
                  {technologies && technologies.map(({name, id}, index) =>
                    <option key={uuidv4()} value={id}>{name}</option>
                  )}
                </select>
              </div>
            </div>
        </form>
      </div>
  );
};

export default CreateArticle;
