import React, { useState} from 'react'
import Cookies from 'js-cookie';
import './style.css'
import { useHistory } from 'react-router-dom'


const CreateArticle = () => { 
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [lead, setLead] = useState('')
    const token = Cookies.get('token')

    const history = useHistory()
    console.log(token)

    const inputData = {
      resource: {
        title: title,
        lead: lead,
        content: content,
      }
    }


    const url = "https://ronincode.herokuapp.com/resources"

    const handleFetch = (e) => {
      e.preventDefault();

      console.log("hello")

      fetch(url, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          "Authorization": `${token}`
        },
        body : JSON.stringify(inputData)
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.id)
        alert("Article crée")
        history.push(`/article/${data.id}`)
      })

    }
    
    return (
      <div className = "NewArticle">
        <h1>Ajouter un Article</h1>
        <form className="form" onSubmit={handleFetch}>
          <div className="FirstColumn">
            <input type="text" value={title} placeholder="Titre de l'article" onChange={(e) => setTitle(e.target.value)}></input>
            <textarea className="ArticleLead" placeholder="Introduction" type="textarea" value={lead} onChange={(e) => setLead(e.target.value)}></textarea>
            <textarea className="ArticleContent" placeholder="Contenu de l'article" type="textarea" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button>Valider</button>
          </div>
          <div className="SecondColumn">
            <div className="Technologies">
              <h2>Technologies</h2>
              <div className="Options">
                <div>
                  <label>JS</label>
                  <input type="radio" id="male" name="gender" value="male"></input>
                </div>
                <div>
                  <label>React</label>
                  <input type="radio" id="male" name="gender" value="male"></input>
                </div>
                <div>
                  <label>HTML</label>
                  <input type="radio" id="male" name="gender" value="male"></input>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
}

export default CreateArticle