import { useHistory } from 'react-router-dom';
import React, { useState} from 'react';
import Cookies from 'js-cookie';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [lead, setLead] = useState('');
    const token = Cookies.get('token');
    const [technologies, setTechnologies] = useState([]);
    const history = useHistory();
    const inputData = {
      resource: {
        title: title,
        lead: lead,
        content: content,
      }
    }

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
        alert("error")
       } else {
          console.log(data.id)
          alert("Article crée")
          history.push(`/articles/${data.id}`)
        }
      })
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


    return (
      <div className = "NewArticle">
        <form className="newform" onSubmit={handleFetch}>
          <div className="Column1">
            <h1>Ajouter un Article</h1>
            <input type="text" value={title} placeholder="Titre de l'article" onChange={(e) => setTitle(e.target.value)}></input>
            <textarea className="ArticleLead" placeholder="Introduction" type="textarea" value={lead} onChange={(e) => setLead(e.target.value)}></textarea>
            <textarea className="ArticleContent" placeholder="Contenu de l'article" type="textarea" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button>Valider</button>
          </div>
          <div className="Column2">
            <div className="Technologies">
              <h2>Technologies</h2>
              <div className="Technologies">
                <h2>Technologies</h2>
                  <select name="techno" id="techno1">
                    {technologies && technologies.map(({name, id}, index) =>
                      <option key={Math.random()} value ={id}>{name}</option>
                    )}
                  </select>
              </div>
              </div>
            </div>
        </form>
      </div>
  );
}

export default CreateArticle
